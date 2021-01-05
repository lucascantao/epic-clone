import React from 'react'
import './ListThumb.css'

function ListThumb({ changeBanner, title, img }) {
    return (
        <div className='ListThumb' onClick={() => changeBanner(title, img)}>
            {/* <p hidden>{key}</p> */}
            <div className="imgContainer">
                <img src={img} alt={`${title} banner`} />

            </div>
            <p >{title}</p>
        </div>
    )
}

export default ListThumb
