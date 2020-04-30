import React, { useState, useEffect } from 'react';

function Count() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        console.log("basic-hooks.js -> %s", count);
    });

    return (
        <div>
            <p>Current count is {count}</p>
            <button onClick={() => setCount(count - 1)}>
                Increase counter
            </button>
        </div>
    );
}

export default Count;