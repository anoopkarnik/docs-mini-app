import React,{useState, useRef} from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        { desc : 'Lorem ipsum dolor sit amet consectetur adipisintg.',filesize: ".9mb", close: true, 
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green", }},
        { desc : 'Lorem ipsum dolor sit amet consectetur adipisintg.',filesize: ".9mb", close: true, 
        tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green", }},
        { desc : 'Lorem ipsum dolor sit amet consectetur adipisintg.',filesize: ".5mb", close: false, 
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue", }}
    ]
  return (
    <div ref={ref} className="flex gap-10 fixed top-0 left-0 w-full h-full z-[3] flex-wrap p-5 content-start">
        {data.map((item,index) => {
            return <Card key={index} data={item} reference={ref}/>
        })}
    </div>
  )
}

export default Foreground