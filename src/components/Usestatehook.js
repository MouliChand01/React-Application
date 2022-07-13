import React, { useState } from "react";

const Usestatehook =()=>{
    const[counter,setCounter]=useState(0);
    const[value,setValue]=useState('Mouli')
    const IncrementValue =()=>{
        setCounter(counter+1);
    }
    const DecrementValue =()=>{
        setCounter(counter-1);
    }
    const changename =(event)=>{
        const newvalue = event.target.value;
        setValue(newvalue);
    }
    return (
        <div>
           <p>useState : {counter}</p>
           <button onClick={IncrementValue}>Increment</button>
           <button onClick={DecrementValue}>Decrement</button>
           <br/>
           <input type="text" placeholder="Enter Name.." onChange={changename}/>
           <p>{value}</p>
        </div>
    )
}

export default Usestatehook ;