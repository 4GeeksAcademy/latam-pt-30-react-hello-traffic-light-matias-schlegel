import React, { useState } from "react";

// al final no la termine usando
export const Light = () => {
    const [light, setLight] = useState(false)
    return (
        <React.Fragment>
            <button  onClick={ () => {
                setLight((prev) => {
                    if (prev == true ) {
                        return false
                    } else{
                        return true
                            }
                })
            }}>       
            </button>
        </React.Fragment>
    )
}