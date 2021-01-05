import React from 'react'
import './HomePage.css'

function HomePage() {
    return (
        <div className='HomePage'>
            <div className="HomePage-Image">
                <img src="/img/HomePageThumbs/unreal-engine-home-thumb.jpg" alt=""/>
                <h1>Unreal Engine</h1>
            </div> 
            <div className="HomePage-Image">
                <img src="/img/HomePageThumbs/fortnite-home-thumb.jpg" alt=""/>
                <h1>Fortnite</h1>
            </div> 
        </div>
    )
}

export default HomePage
