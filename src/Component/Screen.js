import React, { useContext } from "react";
import { CalcContext } from "../Context/CalcContext";

const Screen = () => {
    const {calc} = useContext(CalcContext);
    return (
        <div className="screen">
            <div className="calcData">{calc.a} {calc.operator} {calc.b}</div>
            <div className="calcResult">{calc.result}</div>
        </div>
    )
}

export default Screen