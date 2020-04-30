import React, { useState, useEffect } from 'react';
import useCheckOddNumber from './logic';

export function RandomNumber() {
    const [randomNumber, setNumber] = useState(10);
    const isOdd = useCheckOddNumber(randomNumber);

    useEffect(() => {}, [randomNumber]);

    function handleNewRandomNumber() {
        // Get a random number is between 0 - 10
        setNumber(Math.floor(Math.random() * 3));
    }

    return (
        <div>
            <h4>Component 2:</h4>
            <p>Random number: {randomNumber}</p>
            <p>Is {randomNumber} an Odd number? {isOdd ? 'yes' : 'no'}</p>
            <button onClick={() => handleNewRandomNumber()}>
                Get random number
            </button>
        </div>
    );
}
