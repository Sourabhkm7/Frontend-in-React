import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

//  let counter = 15

const addValue = () => {
  if (counter < 20) {
    setCounter(counter + 1);
  } else {
    console.log("Counter cannot exceed 20");
  }
};

const subValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  } else {
    console.log('Counter cannot be negative');
  }
};
   return (
    <>
      <h1> Counter Using hooks</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button onClick= {subValue}>Dec value</button>
    </>
  )
}

export default App
