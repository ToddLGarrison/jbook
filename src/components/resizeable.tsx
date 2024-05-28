import './resizable.css';
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface ResizableProps {
    direction: "horizontal" | "vertical";
    children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    if (direction === "horizontal") {
        resizableProps = {
            className: "resize-horizontal",
            minConstraints:[Math.floor(window.innerWidth * 0.2), Infinity],
            maxConstraints:[Math.floor(window.innerWidth * 0.75), Infinity],
            height:Infinity,
            width: window.innerWidth * 0.75,
            resizeHandles:['e'],
        }
    } else {
        resizableProps = {
            minConstraints:[Infinity, 24],
            maxConstraints:[Infinity, Math.floor(window.innerHeight * 0.9)],
            height:300,
            width:Infinity,
            resizeHandles:['s'],
        }
    }

    return (
        <ResizableBox {...resizableProps}>
                {children}
        </ResizableBox>
    )
}

export default Resizable