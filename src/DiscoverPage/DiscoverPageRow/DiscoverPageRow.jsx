import React from 'react'
import ViewMoreButton from '../../MoreButton/ViewMoreButton'
import GameCard from './GameCard'

import './DiscoverPageRow.css'


function DiscoverPageRow({title, gameList}) {
    return (
        <div className='DiscoverPageRow'>
            <div className="header">
                <p>{title}</p>
                <ViewMoreButton />
            </div>

            <div className="gameList">
                {gameList.map((game, index) => { return <GameCard key={index} title={game.title} price={game.price} thumb={game.thumb} company={game.company} /> })}
            </div>
        </div>
    )
}

export default DiscoverPageRow
