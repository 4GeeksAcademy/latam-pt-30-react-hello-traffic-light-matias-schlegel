import React from "react";
import {useState} from "react";

export const Semaforo = () => {
   const [lightRed, setLightRed] = useState(false)
   const [lightYellow, setLightYellow] = useState(false)
   const [lightGreen, setLightGreen] = useState(false)
    return (
        <React.Fragment>
            <div className="all vh-100">
                <div className="palo"></div>
                <div className="container">
                    <div className="icons">

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

                        <i className="light1"
                        style={{ boxShadow: lightYellow ? "0px 0px 50px 20px rgb(255, 238, 0)" : "none" }}
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
                        <i className="light2"
                        style={{ boxShadow: lightGreen ? "0px 0px 50px 20px rgb(60, 255, 0)" : "none" }}
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
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
   