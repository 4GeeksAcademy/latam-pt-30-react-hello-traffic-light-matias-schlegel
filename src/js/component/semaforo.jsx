import React, { useState } from "react";
import { LightRed } from "./lightRed";
import { LightYellow } from "./lightYellow";
import { LightGreen } from "./lightGreen";

export const Semaforo = () => {
const [newColor, setNewColor] = useState(false)
    return (
        <React.Fragment>
            <div className="all vh-100">
                <div className="palo"></div>
                <div className="container">
                    <div className="icons">
                        <LightRed />
                        <LightYellow />
                        <LightGreen />
                    </div>
                </div>
                    <button 
                    className="m-5"
                    onClick={() => {

                    }}
                    >Add other circle</button>
            </div>
        </React.Fragment>

    )
}
   