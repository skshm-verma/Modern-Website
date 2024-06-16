import React from 'react'
import MidComponentItem from './MidComponentItem'
import MidPhone1 from '../../../public/assets/MidComponentPhone.png'
import MidPhone2 from '../../../public/assets/midPhone2.png'

const MidComponentParent = () => {
    return (
        <div >
            <MidComponentItem
                title="Dive into the future"
                text="In a world where people constantly have phone in their hands, the need for online opportunities is growing. We have a solution - fully digital access to all information and services related to the interior and design itself. Everything for a carefree stay in the palm of a hand."
                img={MidPhone1}
                reverse>
            </MidComponentItem>
            <MidComponentItem
                title="Search by room"
                img={MidPhone2}>
            </MidComponentItem>
        </div>
    )
}

export default MidComponentParent
