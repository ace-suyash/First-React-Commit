import { useState } from 'react'

function App() {

    const [title,setTitle] = useState('')
    const [details,setDetails] = useState('')
    const [tasks,setTasks] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        
        const copyTask = [...tasks]

        copyTask.push({title,details});

        setTasks(copyTask);

        setTitle('')
        setDetails('')
    }

    const deleteNote = (idx) => {
        const copyTask = [...tasks]

        copyTask.splice(idx,1);

        setTasks(copyTask)
    }
  return (

  <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e) => {
          submitHandler(e)
      }} className='flex justify-top lg:w-1/2 items-start gap-4 p-10 flex-col'>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        <input type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium outline-none py-2 border-2 rounded'
            value={title}
            onChange = {(e) => {
                    setTitle(e.target.value)
            }}
        />

      <textarea type="text"
        className='px-5 w-full font-medium flex flex-row h-32 py-2 outline-none border-2 rounded'
        placeholder='Write details'
        value={details}
        onChange= {(e) => {
            setDetails(e.target.value)
        }}
       />
      
      <button className='bg-white active:scale-95 w-full font-medium items-start
       text-black outline-none px-2 py- 4 
       rounded'>Add Note</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
            <h1 className ='font-bold text-4xl' >Recent Notes</h1>
            <div className='flex flex-wrap h-[90%] items-start
             justify-start overflow-auto mt-6 gap-5 '>
                {
                    tasks.map((e,idx) =>{
                        return <div key = {idx} className='flex flex-col bg-cover h-52 w-40 justify-between items-start rounded-xl text-black pt-9 pb-4 px-4
                         gap-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                                    <div>
                                        <h3 className='leading-tight text-lg font-bold'>{e.title}</h3>
                                        <p className='mt-2 leading-tight text-sm font-semibold text-grey-600'>{e.details}</p>
                                    </div>

                                    <button onClick = {() =>{
                                        deleteNote(idx)
                                    }} className='cursor-pointer active:scale-95 w-1/2 items-center ml-8 justify-center bg-red-500 text-white py-1 px-1 text-xs font-bold rounded' >
                                        Delete
                                    </button>
                                </div>
                    })
                }
            </div>
      </div>
  </div>
  )
}

export default App
