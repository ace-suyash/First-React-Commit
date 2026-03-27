import { useState } from 'react'

function App() {

  const submitHandler = (e) => {
      e.preventDefault()
      console.log('Form submitted');
  }

  return (

  <div className='h-screen bg-black text-white flex'>
      <form onSubmit={(e) => {
          submitHandler(e)
      }} className='flex justify-top w-1/2 gap-4 p-10 flex-col'>
          
      <input type="text" 
      placeholder='Enter Notes Heading'
      className='px-2 w-full font-medium outline-none py-2 border-2 rounded'
      />

      <input type="text"
        className='px-5 w-full font-medium h-32 py-2 outline-none border-2 rounded'
       placeholder='Write details'
       />
      
      <button className='bg-white w-full font-medium items-start text-black outline-none px-2 py- 4 rounded'>Start writing</button>
      </form>

      <div className='flex flex-wrap '>
          <div className='h-32 w-32 rounded-2xl bg-white'>
              
          </div>
      </div>
  </div>
  )
}

export default App
