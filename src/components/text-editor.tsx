import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const TextEditor: React.FC = (() => {
    const [editing, setEditing] = useState(false);

    if (editing) {
        return (
            <div>
                <MDEditor />
            </div>
        )
    }

    return (
        <div onClick={() => setEditing(true)}>
            <MDEditor.Markdown source={"# Header"} />
        </div>
    )
})

export default TextEditor