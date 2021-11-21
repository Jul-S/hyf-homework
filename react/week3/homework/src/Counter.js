import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return <p>You have used {count} seconds on this website</p>
}

export default Counter;