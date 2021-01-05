import React from 'react'

import HotGames from './HotGames/HotGames'
import FreeGames from './FreeGames/FreeGames'
import DiscoverPageRow from './DiscoverPageRow/DiscoverPageRow'
import './DiscoverPage.css'

function DiscoverPage() {

    const pupularGames = [
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
        <div className='DiscoverPage'>
            <HotGames />
            <DiscoverPageRow title='Most Popular' gameList={pupularGames} />
            <FreeGames />
        </div>
    )
}

export default DiscoverPage
