import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const UsememoHook =()=>{
    const [data ,setData]=useState(0)
    const [data1, setData1]=useState(0)
    // useEffect(()=>{
    //    axios.get("https://jsonplaceholder.typicode.com/users").then((respone)=>setData(respone.data))
    // },[])
    useEffect(()=>{
        console.log("this is useEffect")
    },[data])
    useMemo(()=>{
        console.log("this is useMemo")
    },[data1])
    
    return(
        <div>
          <h4>Usememo Hooks</h4>
          <p>{data},{data1}</p>
          <button onClick={()=>setData(data +1)}>Increment useEffect</button>
          <button onClick={()=>setData1(data1 +1)}>Increment memo</button>
        </div>
    )

}

export default UsememoHook;