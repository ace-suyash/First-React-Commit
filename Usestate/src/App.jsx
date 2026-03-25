import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num,setNum] = useState(10)

  const changenum = () => {
    
    setNum(prev => (prev+1));
    setNum(num+1);  
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
    
  }

  return (
    <div>
        <h4>{num}</h4>
        <button onClick={changenum}> Click here</button>
    </div>
  )
}

export default App
