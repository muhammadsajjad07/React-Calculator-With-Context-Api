import './App.css';
import React, { useContext, useState, useEffect } from 'react';
import { CalculatorContext } from './Provider';
import CalculateEventHandle from './calculateEventHandle'
import backspace from './backspace.png'
function App() {

  const [inputNumber, setnumber] = useState("")
  const { number, setCalculateEvent } = useContext(CalculatorContext)


  const numberChangeEvent = (e) => {
    setnumber(e.target.value);
  }
  const OperationEventHandle = (isEvent) => {
    let num = inputNumber + "" + (isEvent === "%" ? "/100" : isEvent)
    // console.log(num);

    setnumber(num)


  }

  const CalculateHandle = () => {


    var output = CalculateEventHandle(inputNumber)
    setCalculateEvent(output)

  }
  useEffect(() => {
    let bool = false
    try {
      var output = CalculateEventHandle(inputNumber)
    eval(output)
    } catch (e) {
      console.log(e);
      bool = true
    } finally {
      if (!bool) {
        CalculateHandle();
      }
    }
  }, [inputNumber])

  return (
    <div className='container'>
 <div className="calculator-card">
      <div className='answer-field'>{number ? number : 0}</div>
      <input  autoFocus className='input-field' type={'text'} value={inputNumber} onChange={numberChangeEvent} />
      <div className='calculator-row'>
      <button className='operation-button' onClick={(e) => { setnumber("") }}>AC</button>
      <button className='operation-button' onClick={(e) => { setnumber(inputNumber.slice(0, -1)) }}><img src={backspace} /> </button>
      <button className='operation-button' onClick={(e) => { OperationEventHandle("%") }}>%</button>
      <button className='operation-button' onClick={(e) => { OperationEventHandle("/") }}>÷</button>
      </div>
      <div className='calculator-row'>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("7") }}>7</button>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("8") }}>8</button>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("9") }}>9</button>
      <button className='operation-button' onClick={(e) => { OperationEventHandle("*") }}>×</button>

      </div>
      <div className='calculator-row'>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("4") }}>4</button>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("5") }}>5</button>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("6") }}>6</button>
      <button className='operation-button' onClick={(e) => { OperationEventHandle("-") }}>-</button>

      </div>
      <div className='calculator-row'>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("1") }}>1</button>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("2") }}>2</button>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("3") }}>3</button>
      <button className='operation-button' onClick={(e) => { OperationEventHandle("+") }}>+</button>


      </div>
      <div className='calculator-row'>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("0") }}>0</button>
      <button className='numeric-button' onClick={(e) => { OperationEventHandle("00") }}>00</button>
      <button className='operation-button' onClick={(e) => { OperationEventHandle(".") }}>.</button>
      <button className='operation-button' onClick={(e) => { CalculateHandle("=") }}>=</button>


      </div>
     
     
     
     
     

    </div>
    </div>
   
  );
}

export default App;
