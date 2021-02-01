import React, { useState } from 'react'
import ListThumb from './ListThumb';

function HotGames() {


    const Hot_Games = [
        {
            name: 'Cyberpunk 2077',
            bigThumb: '/img/hotGamesThumbs/bigThumbs/Cyberpunk-2077-5.jpg',
            smallThumb: '/img/hotGamesThumbs/smallThumbs/CP77-smallThumb.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, Totam quidem nulla laborum. Assumenda, provident.'
        },
        {
            name: "Assassin's Creed Valhalla",
            bigThumb: '/img/hotGamesThumbs/bigThumbs/Assassins-Creed-Valhalla-2.jpg',
            smallThumb: '/img/hotGamesThumbs/smallThumbs/ACV-smallThumb.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quia, facilis distinctio veritatis aperiam repudiandae eos.'
        },
        {
            name: 'GTA V',
            bigThumb: '/img/hotGamesThumbs/bigThumbs/GTA V.jpg',
            smallThumb: '/img/hotGamesThumbs/smallThumbs/GTA-V2.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quis alias incidunt ea corrupti quae.'
        },
        {
            name: 'Watch Dogs Legion',
            bigThumb: '/img/hotGamesThumbs/bigThumbs/Watch-dogs-legion.jpg',
            smallThumb: '/img/hotGamesThumbs/smallThumbs/WDL-smallThumb.jpg',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum et at laborum suscipit beatae.'
        },
        {
            name: 'Death Stranding',
            bigThumb: '/img/hotGamesThumbs/bigThumbs/death-stranding.jpg',
            smallThumb: '/img/hotGamesThumbs/smallThumbs/DS-smallThumb.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, Totam quidem nulla laborum. Assumenda, provident.'
        },
        {
            name: 'Fortnite',
            bigThumb: '/img/hotGamesThumbs/bigThumbs/fortnite.jpg',
            smallThumb: '/img/hotGamesThumbs/bigThumbs/fortnite.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, Totam quidem nulla laborum. Assumenda, provident.'
        }
    ]


    const [Banner, setBanner] = useState(Hot_Games[0])

    function changeBanner(title, img) {
        // console.log(Hot_Games)
        setBanner(Hot_Games.filter(game => game.name === title)[0])
    }

    return (
        <div>
            <div className="hotGames">
                <div className="bigThumb">
                    <div className="bigThumb-img">
                        <img src={Banner.bigThumb} alt="" />
                    </div>
                    
                    <div className="bigThumb-interface">
                        <p className='bigThumb-title'>{Banner.name}</p>
                        <p className='bigThumb-description'>{Banner.description}</p>
                        <button className='bigThumb-buyNow'><p>Buy Now</p></button>
                    </div>
                </div>
                <div className="gameList">
                    {Hot_Games.map((game, index) => {
                        return <ListThumb key={index} changeBanner={changeBanner} title={game.name} img={game.smallThumb} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default HotGames
