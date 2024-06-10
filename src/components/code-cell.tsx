import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';
import { Cell } from '../state';

interface CodeCellProps {
    cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output.code);
            setError(output.error);
        }, 750);

        return () => {
            clearTimeout(timer);
        }
    }, [input]);
    
    return (
        <Resizable direction="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    <CodeEditor 
                        initialValue="const a = 1;"
                        onChange={(value) => setInput(value)}
                    />
                </Resizable>
                <Preview code={code} error={error} />
            </div>
        </Resizable>
    );
};

export default CodeCell;