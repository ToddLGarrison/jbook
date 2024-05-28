import { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizeable';

const CodeCell = () => {
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };
    
    return (
        <Resizable direction="vertical">
            <div>
                <CodeEditor 
                    initialValue="const a = 1;"
                    onChange={(value) => setInput(value)}
                />
                <div>
                    <button onClick={onClick}>Submit</button>
                </div>
                <Preview code={code} />
            </div>
        </Resizable>
    );
};

export default CodeCell;