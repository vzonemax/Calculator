import React, { useContext } from "react";
import { CalcContext } from "../Context/CalcContext";

const Button = ({value}) => {
    const {calc,setCalc}= useContext(CalcContext);

    const getStyleName = (value) => {
        const btnStyles = {
            "+": "opt",
            "-": "opt",
            "*": "opt",
            "/": "opt",
            "=": "equal",
        }
        if (btnStyles[value] !== undefined) {
            return btnStyles[value]
        }
        return "";
    }

    const handleNumberClick = (value) => {
        if (calc.i === 0 && calc.a !== "0") {
            setCalc({ ...calc, a: (calc.a + "" + value)})
            return;
        } 
        if (calc.i === 2 && calc.b !== "0") {
            setCalc({ ...calc, b: (calc.b + "" + value), i: 2}) 
        }
    }
 
    const handleGetResult = (operator) => {
        if (calc.i === 0) {
            setCalc({
                ...calc,
                result: calc.a
            })
            return;
        }
        const operations ={
            "+": (a, b) => a + Number(b),
            "-": (a, b) => a - Number(b),
            "/": (a, b) => a / Number(b),
            "*": (a, b) => a * Number(b),
        }
        setCalc({
            ...calc,
            i: 3,
            result: (+operations[operator](calc.a, calc.b).toFixed(10))
        })
    }

    const handleSetOperator = (value) => {
        setCalc({
            ...calc,
            a: Number(calc.a),
            operator: value,
            i: 2,
        })
    }

    const handleReset = () => {
        setCalc({
            a: "",
            operator: "",
            b: "",
            i: 0,
            result: 0,
        })
    }

    const handleDelete = () => {
        if (calc.i === 0) {
            let newVal = calc.a.toString();
            setCalc({
                ...calc,
                a: (newVal.substr(0,newVal.length-1)),
            });
            return;
        }
        if (calc.i === 2) {
            if (calc.b.toString().length === 0) {
                setCalc({
                    ...calc,
                    operator: '',
                    i: 0
                });
                return;
            }
            let newVal = calc.b.toString();
            setCalc({
                ...calc,
                b: (newVal.substr(0,newVal.length-1)),
            });
            return;
        }
    }

    const handleSetPoint = (value) => {
        const checkPoint = (val) => {
            val = val.toString();
            return !(val.includes('.') || (val.length === 0) )
        }
        if (calc.i === 0 && checkPoint(calc.a) ) {
            setCalc({ ...calc, a: (calc.a + "" + value)}) 
            return
        }
        if (calc.i === 2 && checkPoint(calc.b) ) {
            setCalc({ ...calc, b: (calc.b + "" + value)}) 
        }        
    }

    const handleGetPrecent = () => {
        if (calc.i === 0) {
            setCalc({ ...calc, a: (calc.a / 100)}) 
            return;
        } 
        if (calc.i === 2) {
            setCalc({ ...calc, b: (calc.b / 100)}) 
            return;
        }
        if (calc.i === 3) {
            setCalc({ ...calc, result: (calc.result / 100)}) 
            return;
        }
    }

    const getOperation = () => {
        if (Number.isFinite(value)) {
            handleNumberClick(value)
            return
        }
        if (value === "=") {
            handleGetResult(calc.operator);
            return
        }
        if (value === "C") {
            handleReset();
            return
        }
        if (value === "CE") {
            handleDelete();
            return
        }
        if (value === ".") {
            handleSetPoint(value);
            return
        }
        if (value === "%") {
            handleGetPrecent();
            return
        }
        handleSetOperator(value);
        
    }

    return (
        <button 
            onClick={getOperation}
            className={`${getStyleName(value)} button`}
        >
            {value}
        </button>
    )
}

export default Button