import React, { useRef } from "react";

const UserefHook = () =>{

    const inputRef = useRef(null)

    const clicked =()=>{
        // inputRef.current.focus();
        inputRef .current.value="";
    }

    return(
        <div>
         <input type="text" placeholder="Ex......." ref={inputRef}/>
         <button onClick={clicked}>ChangeName</button>
        </div>
    )
}

export default UserefHook ;