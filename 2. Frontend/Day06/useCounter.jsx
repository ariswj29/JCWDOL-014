import {useState} from 'react';

function App(){
    const [count, increment, decrement] = useCounter(0, 1);

    return (    
        <div>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}


export function useCounter(initialValue, step){
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);

    return [count, increment, decrement];
}