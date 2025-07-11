import { useState } from "react"

export const Counter =() => {
    const [count, setCount] = useState(0);
    return (
        <div>
        <h2>Counter: {count}</h2>
        <button>Incrementa</button>
    </div>
    )
}

