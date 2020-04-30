import React, { useState, useEffect } from 'react';
import useCheckOddNumber from './logic';

function NumberStatus() {
    const [count, setCount] = useState(10);
    const isOdd = useCheckOddNumber(count); // Hooks rules - Only call Hooks at the top level

    useEffect(
        () => {
            console.log("custom-hooks -> %s", count);
        },
        [count] // Only re-run the effect if count changes
    );

    return (
        <div>
            <h4>Component 1:</h4>
            <p>{count} is an Odd number? {isOdd ? 'yes' : 'no'}</p>
            <button onClick={() => setCount(count - 1)}>
                Check Odd
            </button>
        </div>
    );
}

export default NumberStatus;