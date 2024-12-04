import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment6() {

    const input = useRef();

    useEffect(() => {
        // const inputField = document.getElementById("inputField");
        // inputField.focus();
        input.current.focus();
    }, [input]);

    const handleButtonClick = () => {
        input.current.focus();
    };

    return (
        <div>
            <input ref={input} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};