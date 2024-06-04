import React from 'react'
import { room } from "../DataForPage/DummyData";
import { motion } from 'framer-motion'

const MidComponentItem = ({ title, img, text, reverse }) => {
    return (
        <div id="company">
            {reverse ?
                (
                    <div className="grid grid-cols-2 justify-items-center items-center">
                        <motion.div
                            className='w-4/5 pl-24'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                        >
                            <h2
                                className='text-5xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                                {title}
                            </h2>
                            <p
                                className='text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                                {text}
                            </p>
                            <button className='pushable mt-4'><span className='front'>Start Now</span></button>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 },
                            }}>
                            <img
                                className='h-[775px] pt-10 hover:rotate-6 duration-1000 cursor-pointer'
                                src={img} alt='phone1' />
                        </motion.div>
                    </div>
                )
                :
                (
                    <div id="room" className='flex flex-row-reverse justify-around items-center w-full'>
                        <div>
                            <h2 className='text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                                {title}
                            </h2>
                            <div className='flex flex-col '>
                                {room.map((item) => {
                                    return (
                                        <div className='flex items-center py-2' key={item.id}>
                                            <div className="mr-4">
                                                <img
                                                    className="w-16 h-16"
                                                    src={item.img}
                                                    alt={item.name} />
                                            </div>
                                            <p
                                                className="text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark w-full">
                                                {item.name}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <img
                                className="h-[775px] pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer"
                                src={img}
                                alt="phone"
                            ></img>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default MidComponentItem
