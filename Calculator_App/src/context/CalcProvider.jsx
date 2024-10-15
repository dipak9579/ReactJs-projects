import { createContext,useState } from "react";

export const CalcContext=createContext();

const CalcProvider=(props)=>{

    const [inputVal,setInputVal]=useState("");
 

    const handleVal=(num)=>{
        setInputVal((prev)=>prev+num);
        
    }
    
    const calculateResult=()=>{
        try {

            const operators=inputVal.split(/[\d.]+/).filter(op=>op) //Extract operators using regex
            const numbers=inputVal.split(/[+\-*/]/).map(Number) //Extract numbers
            
            let result=numbers[0];
            for(let i=0;i<operators.length;i++){
                switch (operators[i]) {
                    case '+':
                        result +=numbers[i+1]
                        break;
                    case '*':
                        result *=numbers[i+1]
                        break
                    case '-':
                        result -=numbers[i+1]
                        break
                    case '/':
                        result /=numbers[i+1]
                        break
                    default:
                        throw new Error("Invalid operator")
                }
            }
            setInputVal(result.toString())

        } catch (error) {
            setInputVal("Error")
        }
    }

    const clearInput=()=>{
        setInputVal("")
    }

    return(
        <CalcContext.Provider value={{inputVal,handleVal,calculateResult,clearInput}}>
        {props.children}
        </CalcContext.Provider>
    )
}

export default CalcProvider