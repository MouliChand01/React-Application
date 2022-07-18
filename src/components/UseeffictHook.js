import React, { useEffect, useState } from "react";
import axios from "axios";



const UseeffictHooK = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(10)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((e) => { setData = e.data });
        console.log("Hello")
    },[])
    return (
        <div>
            {/* {data.map((e)=>{
                return (
                    <p key={e.id}>{e.name}</p>
                )
            })} */}
            <h1>{count}</h1>
            <button onClick={() => {
                const newcount = count + 1;
                setCount(newcount)
            }}>IncrementCount</button>
        </div>
    )
}

export default UseeffictHooK;