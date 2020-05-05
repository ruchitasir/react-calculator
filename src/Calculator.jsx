import React,{useState} from 'react';

const Calculator= props=> {

    let [num1, setNum1] = useState('')
    let  [num2, setNum2] = useState('')
    let [sum, setSum] = useState('') 
    let [subtract, setSubtract] = useState('')

  
   const add=()=>{
        num1 = document.getElementById('num1').value
        num2 = document.getElementById('num2').value
        setNum1(num1)
        setNum2(num2)
        sum = parseInt(num1)+parseInt(num2)
        setSum(sum)
    }
    const subtraction=()=>{
        num1 = document.getElementById('num1').value
        num2 = document.getElementById('num2').value
        setNum1(num1)
        setNum2(num2)
        subtract = parseInt(num1)-parseInt(num2)
        setSubtract(subtract)
    }
   return(
    <div className="container">
    <h1>Calculate with React!</h1>
      
        <div className="add">
        <input type="number" name="num1"  placeholder="Enter your first number" id="num1"/>
        
        <input type="number" name="num2"  placeholder="Enter your first number" id="num2" />

        <button onClick={add}>+</button>
        <button onClick={subtraction}>-</button>
       

            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>

        <h3>Addition: {sum}</h3>
        <h3>Subtraction: {subtract}</h3>

        </div>
    </div>
    )
}

export default Calculator