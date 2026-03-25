import React from 'react'
import { MoveRight } from 'lucide-react';

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 p-8 h-full w-full flex flex-col justify-between'>
        <h3 className='bg-white p-6 flex items-center h-14 w-14 justify-center
         rounded-full text-xl font-semibold '>{props.id + 1}</h3>

         <div>
            <p className='text-shadow-2xs mb-14 text-white font-medium leading-relaxed text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maiores est similique et sit quibusdam? Cupiditate!</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor: props.color}} 
                className='text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                <button className='text-white font-medium px-3 py-2 bg-blue-200 rounded-full'><MoveRight size={50}/></button>
            </div>
         </div>
    </div>
  )
}

export default Rightcardcontent
