import React, { useState } from "react";

export const LightYellow = () => {
    const [lightYellow, setLightYellow] = useState(false)
    return (
    <React.Fragment>
        <i className="light1" 
            style={{ boxShadow: lightYellow ? "0px 0px 50px 20px rgb(255, 238, 0)": "none" }}
            onClick={ () => {
                setLightYellow((prev) => {
                    if (prev == true ) {
                        return false
                    } else  {
                        return true
                    }
                })
            }}
        ></i>
    </React.Fragment>
    )
}