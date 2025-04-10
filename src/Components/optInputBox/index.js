import { useEffect, useRef, useState } from 'react';
import './index.css'

const OtpInput=()=>{
    const NumberInputBoxes=5;
    const [InputArray,setInputBoxes]=useState(new Array(5).fill(""))
    const InputBox=useRef([]);
    console.log(InputArray)

    useEffect(()=>{
        InputBox.current[0]?.focus()
    },[])

    const OnchangeInputEvent=(value,index)=>{
        if(isNaN(value)) return
        let newArray=[...InputArray];
        let newValue=value.trim();
        newArray[index]=newValue.slice(-1);
        setInputBoxes(newArray)
        newValue && InputBox.current[index+1]?.focus()
    }
    const OnKeyDownEvent=(e,index)=>{
        console.log(e);
        if(!e.target.value && e.key==="Backspace"){
            InputBox.current[index-1]?.focus()
        }
       
    }
    return(
        <div>
            <h1>OTP Input</h1>
            {InputArray.map((value,index)=>(
                <input key={index} type="password" 
                onChange={(event)=>OnchangeInputEvent(event.target.value,index)} 
                value={value}
                ref={(input)=>InputBox.current[index]=input}
                onKeyDown={(e)=>OnKeyDownEvent(e,index)}/>
            ))}
        </div>
    )
}
export default OtpInput