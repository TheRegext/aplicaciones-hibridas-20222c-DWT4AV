import {useState} from 'react'

// estilos

function Counter(props){
    const [count, setCount] = useState(0) // crea un estado 

    function increment(){
        if(count < props.max){
            setCount(count + 1)
        }
    }

    function decrement(){
        if(count > props.min){
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <label>{count}</label>
            <button onClick={increment}>+</button>
        </div>
    )
}


export default Counter