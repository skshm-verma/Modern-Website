import React from 'react'
import { motion } from 'framer-motion'

const MidChild = ({ data, click }) => {
    return (
        <div>
            <div>
                {data.map((item) => {
                    return (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                y: click ? 20 : 0,
                                x: click ? 20 : 0,
                                opacity: 1,
                            }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", duration: 1.5 }}
                            key={item.id}
                            className='flex flex-col relative z-10'>
                            <div className='w-[500px]'>
                                <h3 className='text-5xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark pb-4'>{item.title}</h3>
                            </div>
                            <div className='flex flex-row justify-between items-center w-full'>
                                <div>
                                    <p className='text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>{item.text}</p>
                                </div>
                                <div className='absolute right-0 -z-10'>
                                    <motion.img
                                        className="w-full "
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: click ? "525px" : "525px", opacity: 1 }}
                                        transition={{ type: "tween", duration: 3 }}
                                        src={item.img}
                                        alt={item.title} />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default MidChild
