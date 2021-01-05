import React from 'react'
import './ViewMoreButton.css'

function ViewMoreButton({func}) {
    return (
        <div>
            <button className='ViewMoreButton'>{func === undefined ? 'view' : func} more</button>
        </div>
    )
}

export default ViewMoreButton
