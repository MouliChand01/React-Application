import React, { useEffect, useLayoutEffect } from "react";

const Uselayout = () => {

    useEffect(() => { 
        console.log("useEffict Hooks") 
    })
    
    useLayoutEffect(() => {
        console.log("UseLayoutEffect Hooks")
    })

    return (
        <div>
            <p>UseLayout Hook</p>
        </div>
    )
}

export default Uselayout;