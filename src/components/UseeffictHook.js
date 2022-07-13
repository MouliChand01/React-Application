import React, { useEffect, useState } from "react";
import axios from "axios";

base_url="https://jsonplaceholder.typicode.com/users"

const UseeffictHooK = () => {
    useEffect(()=>{
        axios.get(base_url).then((e)=>{
            console.log(e)
        })
    },[])
    const [data,setData]=useState();
        return (
        <div>
            

        </div>
    )
}

export default UseeffictHooK;