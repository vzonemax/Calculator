import { createContext, useState } from "react";

export const CalcContext = createContext();

const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState({
        a: "",
        operator: "",
        b: "",
        i: 0,
        result: 0,
    });

    const prioviderValue = {
        calc, setCalc
    }

    return (
        <CalcContext.Provider value={prioviderValue}>
            {children}
        </CalcContext.Provider>
    )
}

export default CalcProvider