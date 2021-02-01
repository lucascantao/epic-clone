import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import './GameCard.css'

function GameCard({title, price, thumb, company, small}) {
    return (
        <div className='GameCard'>
            <div className={`GameCard-Thumb ${small && 'small'}`}>
                <img src={thumb} alt=""/>
                
            </div>

            <div className="GameCard-Description">
            <FavoriteBorderIcon className='favorite-icon'/>
                <p>{title}</p>
                <p className='company'>{company}</p>
                <p className='GameCard-Price' >{price}</p>
            </div>
        </div>
    )
}

export default GameCard
