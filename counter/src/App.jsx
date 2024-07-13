//nook /hooks
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0)

  useEffect(()=>{
    //setCount(1)
    //setCount(count)
    var flagcount = true;
    let timer; 
    
    if(true){
    console.log("Inside UseEfect..")
    timer = setTimeout(()=>{
      console.log("Timer started...")
    },1000)
    }
    //claen up fucntion unmounting phase
    return ()=>{
      flagcount = false;
      clearTimeout(timer)
    }
  },[count]) 
  //[] =  render or 1 time mount
  // no [] = mounting continuously
  //[count] = updateing count then only call useEffect

  const increment=()=>{
    setCount(count + 1)
  }
  const decrement=()=>{
    setCount(count - 1)
  }
  const Reset=()=>{
    setCount(0)
  }

  return(
    <>
      <h1>Welcome to React Class componemt </h1>
      <h2>Counter : {count}</h2>

      <button id="button" onClick={()=>
        increment()} >Increment</button>
      <button id="button" onClick={()=>
        decrement()} >Decrement</button>
      <button id="button" onClick={()=>
        Reset()}>Reset</button>
    </>
  )
}

export default App
