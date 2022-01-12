import React, { useState } from 'react'

const Calc = () => {
    const [result, setResult] = useState("");

    const handler = (e) => {
        setResult(result + e.target.name);
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const answer = () => {
        try{
            setResult(eval(result).toString());
        }catch(error){
            setResult("Error");
        } 
    }
    return (
        <div className='container'>
            <form>
                <input type="text" value={result}/>
            </form>
            <div className='keys'>
                <button onClick={clear}>C</button>
                <button onClick={backspace}>B</button>
                <button name="0" onClick={handler}>0</button>
                <button name="*" onClick={handler}>*</button>
                <button name="7" onClick={handler}>7</button>
                <button name="8" onClick={handler}>8</button>
                <button name="9" onClick={handler}>9</button>
                <button name="-" onClick={handler}>-</button>
                <button name="4" onClick={handler}>4</button>
                <button name="5" onClick={handler}>5</button>
                <button name="6" onClick={handler}>6</button>
                <button name="+" onClick={handler}>+</button>
                <button name="1" onClick={handler}>1</button>
                <button name="2" onClick={handler}>2</button>
                <button name="3" onClick={handler}>3</button>
                <button onClick={answer}>=</button>
            </div>
            
        </div>
    )
}

export default Calc
