import React, { useContext, useState } from 'react'
import './CalcUi.css'
import { CalcContext } from '../context/CalcProvider'
const CalcUi = () => {

   const {inputVal,handleVal,calculateResult,clearInput}=useContext(CalcContext)

  return (
    <div className='container'>
        <div className="input-text">
            <input type="text" value={inputVal} readOnly/>
        </div>
      <div className="operation">
        <button onClick={()=>handleVal('*')}>*</button>
        <button onClick={()=>handleVal('/')}>/</button>
        <button onClick={()=>handleVal('-')}>-</button>
        <button onClick={()=>handleVal('+')}>+</button>
      </div>
      <div className="num-start-nine">
        <button onClick={()=>handleVal('9')}>9</button>
        <button onClick={()=>handleVal('8')}>8</button>
        <button onClick={()=>handleVal('7')}>7</button>
        <button onClick={()=>handleVal('6')}>6</button>
      </div>
      <div className="num-start-five">
        <button onClick={()=>handleVal('5')}>5</button>
        <button onClick={()=>handleVal('4')}>4</button>
        <button onClick={()=>handleVal('3')}>3</button>
        <button onClick={()=>handleVal('2')}>2</button>
      </div>
      <div className="num-start-one">
        <button onClick={()=>handleVal('1')}>1</button>
        <button onClick={()=>handleVal('0')}>0</button>
        <button onClick={()=>handleVal('.')}>.</button>
        <button style={{background:"green"}} onClick={calculateResult}>=</button>
      </div>
      <div className="erase-input">
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  )
}

export default CalcUi
