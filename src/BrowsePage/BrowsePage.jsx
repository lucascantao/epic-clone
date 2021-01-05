import React from 'react'
import './BrowsePage.css'
import GameCard from '../DiscoverPage/DiscoverPageRow/GameCard'
import FilterCategory from './FilterCategory'

function BrowsePage() {

    const Games = [
        {
            title: 'Fortnite',
            price: 'Free',
            thumb: '/img/GameThumbs/Fortnite-Thumb-Medium.jpg',
            company: 'Epic Games'
        },
        {
            title: 'Super Meat Boy Forever',
            price: '$15.00',
            thumb: '/img/GameThumbs/SuperMeatBoyForever-Thumb-Medium.jpg',
            company: 'Team Meat'
        },
        {
            title: 'Cyberpunk 2077',
            price: '$60.00',
            thumb: '/img/GameThumbs/Cyberpunk-2077-Thumb-Medium.jpg',
            company: 'CD PROJECT RED'
        },
        {
            title: 'Amnesia Rebirth',
            price: '$24.89',
            thumb: '/img/GameThumbs/Amnesia-Rebirth-Thumb-Medium.jpg',
            company: 'Frictional Games'
        },
        {
            title: 'Among Us',
            price: '$2.99',
            thumb: '/img/GameThumbs/Among-Us-Thumb-Medium.png',
            company: 'InnerSloth'
        }
    ]

    return (
        <div className='BrowsePage'>
            <div className="BrowseGames">
                <p>Sort By:</p>
                <div className="gameList">
                {Games.map(game => { return <GameCard title={game.title} price={game.price} thumb={game.thumb} company={game.company} small/> })}

                </div>
            </div>
            <div className="BrowseFilters">
                <p>Filters</p>
                <FilterCategory title='Events' categories={['Holiday Sale 2020']} />
                <FilterCategory title='price' categories={['Free', 'under $40.00','under $60.00', 'under $100.00', ]} />
                <FilterCategory title='Categories' categories={['action', 'adventure', 'indie', 'rpg', 'mmo', 'horror', 'fps']} />
                <FilterCategory title='features' categories={['sigle player', 'control suport', 'multiplayer', 'co-op', 'competitive', 'VR']} />
                <FilterCategory title='platform' categories={['windows', 'mac OS']} />
            </div>
        </div>
    )
}

export default BrowsePage
