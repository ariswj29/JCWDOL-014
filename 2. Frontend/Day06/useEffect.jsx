import { useState } from "react";
import { useEffect } from "react";

export default function App(){
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
            <h1>Mouse Position</h1>
            <p>
                X: {position.x}, Y: {position.y}
            </p>
        </div>
    );
}
