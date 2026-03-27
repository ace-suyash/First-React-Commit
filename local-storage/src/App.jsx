import React from 'react'

const App = () => {

  const user = {
    username: 'Suyash',
    age: 20,
    city: 'Prayagraj'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))
  
  //We have to pass the object in the string form always 
  // , so JSON.STRINGIFY IS USED IN ORDER TO CONVERT TH EOBJECT user in STRING
 

  console.log(usera);
  return (
    <div>App</div>
  )
}

export default App