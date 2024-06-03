import React from 'react'

const MidButtons = ({ buttons, filter, selected }) => {
    return (
        <div className='flex items-center pt-6'>
            {buttons.map((button) => {
                return (
                    <button
                        onClick={() => filter(button.id)}
                        className={selected === button.id ? "pushable mr-4" : "pushable mr-4"}
                        key={button.id}>
                        <span className={selected === button.id ? 'front2' : 'front'}>
                            {button.name}
                        </span>
                    </button>
                )
            }
            )}
        </div>
    )
}

export default MidButtons
