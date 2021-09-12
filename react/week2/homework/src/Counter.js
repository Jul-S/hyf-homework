import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => setCount(count + 1), 1000);
    });

    return <p>You have used {count} seconds on this website</p>
}

export default Counter;