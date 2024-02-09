import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} 
    dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
    className='relative w-60 h-72 flex-wrap bg-zinc-900/90 px-8 py-10 text-white rounded-[20px] overflow-auto'>
        <FaRegFileAlt />
        <p className='text-xs leading-tight mt-5 font-semibold'> {data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-5'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose/> :
                    <LuDownload size=".7em" color="#fff"/>}
                </span>
            </div>
            {data.tag.isOpen &&
            <div className={`flex items-center justify-center tag w-full py-4 ${data.tag.tagColor=='green'?'bg-green-600':'bg-blue-600'} `}>
                <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
            </div>}
        </div>
    </motion.div>
  )
}

export default Card