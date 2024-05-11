import React, { useState } from "react";

export const LightRed = () => {
    const [lightRed, setLightRed] = useState(false)
    return (
    <React.Fragment>
        <i className="light" 
            style={{ boxShadow: lightRed ? "0px 0px 50px 20px rgb(255, 0, 0)": "none" }}
            onClick={ () => {
                setLightRed((prev) => {
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
