import MonacoEditor, { EditorDidMount } from '@monaco-editor/react'

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const onEditorsDidMount: EditorDidMount = (getValue, monacoEditor) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        })

        monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
    }

    return (
        <MonacoEditor 
            editorDidMount={onEditorsDidMount}
            value={initialValue}
            theme="dark"
            language="javascript"
            height="300px"
            options={{
                wordWrap: 'on',
                minimap: { enabled: false },
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize: 16,
                scrollBeyondLastLine: false,
                automaticLayout: true,
            }}
        />
    )
}

export default CodeEditor;