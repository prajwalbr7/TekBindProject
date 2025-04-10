import {useState, useEffect} from "react"
import "./index.css"

const Counter=()=>{
    let [Count,setCount]=useState(0);

    const Increment=()=>{
        setCount(Count+1);
        
    }
    const Decrement=()=>{
        setCount(Count-1);
        
    }
    useEffect(()=>{
        document.title=`React CounterState: ${Count}`
    },[Count])
    return(
        <div>
            <button onClick={Increment}>+</button>
            <span className={`${Count>3? `green`: `${Count<=0? `black`:`red`}`}`}>{Count}</span>
            <button onClick={Decrement}>-</button>
        </div>
    )
}
export default Counter;

