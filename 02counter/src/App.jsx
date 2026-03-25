import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  const [message, setMessage] = useState("")

const incValue = () => {
  setMessage("Value Increased")
  if(counter + 1 > 20) setMessage("Sorry can't exceed upper limit (20)")
  else {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
}

const decValue = () => {
  setMessage("Value Decreased")
  if(counter - 1 < 0) setMessage("Sorry, can't be negative")
  else setCounter(counter - 1)
}


  return (
    <>
      <h1>IN/DEC Counter</h1>

      <h2> Counter value : {counter}</h2>
      
      <button onClick = {incValue}> Increase Value </button>
      <br/>
      <button onClick = {decValue}> Decrease Value </button>

    </>
  )
}

export default App
