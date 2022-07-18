import React, { useState } from "react";

const Button =()=>{

    const [text,setText]=useState(true)
    const buttonClicked =()=>{
        setText(!text)
    }
    return (
        <div>
            <button onClick={buttonClicked}> Clicked</button>
            {text && <span>I'm The Text Once Clicked I'm Toggle</span>}

        </div>
    )
}

export default React.memo(Button);