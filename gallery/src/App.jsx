import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
  
  const getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      setUserData(response.data)
  }

  useEffect( () => {
    getData()
  },[index])

  let printUserData = <h3 className='absolute text-gray-400 font-semibold text-sm
   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length > 0){
      printUserData = userData.map( (e,idx) => {
          return <div key={idx}>
                <a href={e.url} target='_blank'>
                    <div className='h-40 w-44 overflow-hidden rounded-2xl'>
                        <img className='h-full w-full object-cover' src={e.download_url} alt="" />
                    </div>
                    <h2 className='font-bold text-lg'>{e.author}</h2>
                </a>
          </div>
      })
  }

  return (
      <div className='bg-black text-white min-h-screen p-4'>
          <div className='flex flex-wrap justify-center items-start gap-4 p-4'>
              {printUserData}
          </div>

          <div className='mt-8 flex justify-center items-center gap-6 p-4'>
              <button onClick = {() => {
                  if(index > 1){
                      setIndex(index-1);
                      setUserData([])
                  }
              }} className='text-xl bg-amber-400 rounded-2xl text-white font-bold cursor-pointer active:scale-95 
              flex items-center justify-center px-4 py-2'
              
              style={{ opacity : index == 1 ? 0.6 : 1}}>Prev</button>

              <h2>Page {index}</h2>

              <button onClick = {() => {
                    setIndex(index+1);
                    setUserData([])
                }} className='text-xl bg-amber-400 rounded-2xl text-white font-bold 
                cursor-pointer active:scale-95 flex items-center
                 justify-center px-4 py-2'>Next</button>
          </div>
      </div>
  )
}

export default App
