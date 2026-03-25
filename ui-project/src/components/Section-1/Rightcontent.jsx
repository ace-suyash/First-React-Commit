import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div
      id='right'
      className='h-full flex flex-nowrap overflow-x-auto gap-10 rounded-4xl w-2/3 p-6'
    >
      {props.users.map((e, index) => {
        return (
          <Rightcard
            key={index}
            color={e.color}
            id={index}
            tag={e.tag}
            img={e.img}
          />
        )
      })}
    </div>
  )
}

export default Rightcontent