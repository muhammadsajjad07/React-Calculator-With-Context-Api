import './App.css';
import React, { useContext, useState, useEffect } from 'react';
import { CalculatorContext } from './Provider';


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

  const CalculateEventHandle = () => {


    var operators = ["+", "-", "*", "/"];

    // var str = '0400+0500+0300 *900'
    var list = inputNumber.split("").map(item => {
      if (operators.includes(item)) {
        return "-"
      } else { return item }
    })



    var operatorList = inputNumber.split("").filter(item => {
      if (operators.includes(item)) {
        return item
      }
    })

    var lst = list.join("").split("-").map((item,index) =>{
      return parseInt(item)
  })

  var mapp = lst.map(item=> item ? item.toString() : "")
  var filterMap = mapp.filter(item => item != '' )

  var abclist = filterMap.map((item,index)=>{
    var op = operatorList[index] ? operatorList[index] : ''
      var t = item+""+op
    return t
  })

  var output = abclist.join("")
  
    setCalculateEvent(output)

    // .replace(/^0+/, "")
  }
  useEffect(() => {
    let bool = false
    try {
      var operators = ["+", "-", "*", "/"];

      // var str = '0400+0500+0300 *900'
      var list = inputNumber.split("").map(item => {
        if (operators.includes(item)) {
          return "-"
        } else { return item }
      })
  
  
  
      var operatorList = inputNumber.split("").filter(item => {
        if (operators.includes(item)) {
          return item
        }
      })
  
      var lst = list.join("").split("-").map((item,index) =>{
        return parseInt(item)
    })
  
    var mapp = lst.map(item=> item ? item.toString() : "")
    var filterMap = mapp.filter(item => item != '' )
  
    var abclist = filterMap.map((item,index)=>{
      var op = operatorList[index] ? operatorList[index] : ''
        var t = item+""+op
      return t
    })
  
    var output = abclist.join("")
    eval(output)
    } catch (e) {
      console.log(e);
      bool = true
    } finally {
      if (!bool) {
        CalculateEventHandle();
      }
    }
  }, [inputNumber])

  return (
    <div className="">
      <input type={'text'} value={inputNumber} onChange={numberChangeEvent} />

      <button onClick={(e) => { OperationEventHandle("1") }}>1</button>
      <button onClick={(e) => { OperationEventHandle("2") }}>2</button>
      <button onClick={(e) => { OperationEventHandle("3") }}>3</button>
      <button onClick={(e) => { OperationEventHandle("4") }}>4</button>
      <button onClick={(e) => { OperationEventHandle("5") }}>5</button>
      <button onClick={(e) => { OperationEventHandle("6") }}>6</button>
      <button onClick={(e) => { OperationEventHandle("7") }}>7</button>
      <button onClick={(e) => { OperationEventHandle("8") }}>8</button>
      <button onClick={(e) => { OperationEventHandle("9") }}>9</button>
      <button onClick={(e) => { OperationEventHandle("0") }}>0</button>
      <button onClick={(e) => { OperationEventHandle("00") }}>00</button>
      <button onClick={(e) => { OperationEventHandle("+") }}>+</button>
      <button onClick={(e) => { OperationEventHandle("-") }}>-</button>
      <button onClick={(e) => { OperationEventHandle("*") }}>x</button>
      <button onClick={(e) => { OperationEventHandle("/") }}>/</button>
      <button onClick={(e) => { CalculateEventHandle("=") }}>=</button>
      <button onClick={(e) => { OperationEventHandle("%") }}>%</button>
      <button onClick={(e) => { OperationEventHandle(".") }}>.</button>
      <button onClick={(e) => { setnumber("") }}>C</button>
      <button onClick={(e) => { setnumber(inputNumber.slice(0, -1)) }}>backspace</button>
      <div>Output {number ? number : 0}</div>

    </div>
  );
}

export default App;
