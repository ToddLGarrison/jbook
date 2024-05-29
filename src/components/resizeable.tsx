import './resizable.css';
import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface ResizableProps {
    direction: "horizontal" | "vertical";
    children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;
    const [innerHeight, setInnerHeight] = useState(window.innerHeight)
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    useEffect(() => {
        let timer: any;
        const listener = () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                setInnerHeight(window.innerHeight)
                setInnerWidth(window.innerWidth)
                if (window.innerWidth * 0.75 < innerWidth) {
                    setInnerWidth(Math.floor(window.innerWidth * 0.75))
                }
            }, 100)
        }
        
        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        }
    }, [])

    if (direction === "horizontal") {
        resizableProps = {
            className: "resize-horizontal",
            minConstraints:[Math.floor(innerWidth * 0.2), Infinity],
            maxConstraints:[Math.floor(innerWidth * 0.75), Infinity],
            height:Infinity,
            width: innerWidth * 0.75,
            resizeHandles:['e'],
        }
    } else {
        resizableProps = {
            minConstraints:[Infinity, 24],
            maxConstraints:[Infinity, Math.floor(innerHeight * 0.9)],
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