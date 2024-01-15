import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [Counter , setCounter] =useState(0)
  const  addValue =() =>{
   setCounter(Counter+1)
  }

  const subValue =() => {
    setCounter(Counter-1)
  }
  const checkValue = ()=>{
    if (Counter<=0){
    setCounter(0)
  }
    else if (Counter>=20){
      setCounter(20)
    }

  }
 

  return (
   <>
   <h1>chai aur hooks</h1>
   <h2>Counter value:{Counter}</h2>


   <button onClick={addValue}>Add Value</button>
   <br />
    <button onClick={subValue}>Remove Value</button>
   </>
  )
}

export default App
