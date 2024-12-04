import { useState, useCallback } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment4() {
    const [count, setCount] = useState(0);

    // Your code starts here
    function handleIncrement() {
        setCount (count + 1);
    }

    //what was asked is below :)
    const  handleDecrement = useCallback(() => {
        setCount (prev => prev -1);
    }, [count])

    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);