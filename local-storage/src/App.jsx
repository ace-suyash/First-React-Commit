import React from 'react'

const App = () => {

  const user = {
    username: 'Suyash',
    age: 20,
    city: 'Prayagraj'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);
  return (
    <div>App</div>
  )
}

export default App