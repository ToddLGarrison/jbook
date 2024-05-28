import { ResizableBox } from "react-resizable";

interface ResizableProps {
    direction: "horizontal" | "vertical";
    children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    return (
        <ResizableBox 
            height={300} width={300}>
                {children}
        </ResizableBox>
    )
}

export default Resizable