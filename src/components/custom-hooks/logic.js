import React, { useState, useEffect } from 'react';

// Custom Hook for the logic sharing among many components
function useCheckOddNumber(inputNumber) {
    const [isOddNumber, setOddNumber] = useState(false);

    useEffect(() => {
        if (inputNumber % 2 !== 0) {
            setOddNumber(true);
        } else {
            setOddNumber(false);
        }
    });

    return isOddNumber;
}

export default useCheckOddNumber;