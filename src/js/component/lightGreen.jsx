import React, { useState } from "react";

export const LightGreen = () => {
    const [lightGreen, setLightGreen] = useState(false)
    return (
    <React.Fragment>
        <i className="light2" 
            style={{ boxShadow: lightGreen ? "0px 0px 50px 20px rgb(60, 255, 0)": "none" }}
            onClick={ () => {
                setLightGreen((prev) => {
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