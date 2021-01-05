import React from 'react'
import './FreeGameCard.css'

function FreeGameCard({ big, title, img, dayStart, dayEnd, time }) {


    return (
        <div className={`FreeGameCard ${big && 'big'}`}>
            <div className="FreeGame-Thumb">
                <img src={img} alt="" />

                <div className={`gameStatus ${!dayStart && 'freeNow'} `}>
                    <p>{!dayStart ? 'Free Now' : 'Coming Soon'}</p>
                </div>

            </div>
            <div className="FreeGame-Description">
                <p>{title}</p>
                <p className='limitDate'>Free {!dayStart ? `Now - ${dayEnd} at ${time}` : `${dayStart} - ${dayEnd}`}</p>
            </div>


        </div>
    )
}

export default FreeGameCard
