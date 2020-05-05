import React,{useState} from 'react';

const Calc= props=> {

    let [num1, setNum1] = useState('')
    let  [num2, setNum2] = useState('')
    let [sum, setSum] = useState('') 
    let [subtract, setSubtract] = useState('')
    let [multiply, setMultiply] = useState('')
    let [divide, setDivide] = useState('')

    const handleNum1=(e)=>{
        num1= e.target.value
        setNum1(num1)
    }
    const add=()=>{
        sum = parseInt(num1)+parseInt(num2)
        setSum(sum)
    }

    const subtraction=()=>{
        subtract = parseInt(num1)-parseInt(num2)
        setSubtract(subtract)
    }

    const multiplication=()=>{
        multiply = parseInt(num1)*parseInt(num2)
        setMultiply(multiply)
    }

    const division=()=>{
        if(parseInt(num2)!=0){
            divide = parseInt(num1)/parseInt(num2)
        }
        else{
            divide = "Infinity"
        }
        setDivide(divide)
    }


   return(
        <div className="container">
            <h1>Calculate with React!</h1>
            <div className="calculator">
                <input type="number" name="num1"  placeholder="Enter your first number" value={num1} id="num1" onChange={handleNum1}/>
            
                <input type="number" name="num2"  placeholder="Enter your first number" value={num2} id="num2" onChange={(e)=>setNum2(e.target.value)}/>
                
                <button onClick={add}>+</button>
                <button onClick={subtraction}>-</button>
                <button onClick={multiplication}>*</button>
                <button onClick={division}>/</button>

                <h3>Addition : {sum}</h3>
                <h3>Subtraction: {subtract}</h3>
                <h3>Multiplication: {multiply}</h3>
                <h3>Division: {divide}</h3>  
            </div>
        </div>
    )
}

export default Calc