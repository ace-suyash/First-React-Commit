import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import {Route,Routes} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
        <Navbar/>

        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/About' element = {<About/>}/>
            <Route path='/Contact' element = {<Contact/>}/>
            <Route path='/Product' element = {<Product/>}/>
        </Routes>

    </div>
  )
}

export default App
