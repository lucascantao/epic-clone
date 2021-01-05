import React from 'react'
import FreeGameCard from './FreeGameCard'
import Redeem from '@material-ui/icons/Redeem'
import ViewMoreButton from '../../MoreButton/ViewMoreButton'
import './FreeGames.css'

function FreeGames() {
    return (
        <div className='FreeGames'>
            <div className="FreeGames-header">
                <div className="headerTitle">
                    <Redeem className='RedeemIcon'/>
                    <h1>Free Games</h1>
                </div>
                <ViewMoreButton />
            </div>
            <div className="gamesContainer">
                <FreeGameCard big dayStart={null} dayEnd='Jan 7' time={'1:00 PM'} title='Celeste' img='/img/freeGamesThumbs/Celeste-PromoArt.jpg'/>
                <FreeGameCard big dayStart='jan 7' dayEnd='Jan 14' title="Horizon Zero Dawn" img='/img/freeGamesThumbs/Horizon-Zero-Dawn.jpg'/>
            </div>
        </div>
    )
}

export default FreeGames
