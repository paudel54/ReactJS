
import { useState, useEffect } from 'react';
// 1.Create fn inside component called 'useSomething'
// passing intial COunt as arg, in place of prop in Creating Custom Hook
function useCounter(intialCount) {
    // count State
    const [count, setCount] = useState(intialCount);
    // UseEffect is a fn auto runs when comp rerender the page and state when count var is changed on bais of condition.
    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count: count,
        increment: increment
    };

}

export default useCounter;