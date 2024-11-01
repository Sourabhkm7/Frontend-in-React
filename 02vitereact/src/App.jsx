import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

  const [counter, setCounter] = useState(15)

//  let counter = 15

 const addValue = ()=>{
  console.log("value added", Math.random())
  // counter = counter+1
  setCounter(counter +1)
 }
   return (
    <>
      <h1> Counter Using hooks</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button>Decrease value</button>
    </>
  )
}

export default App
