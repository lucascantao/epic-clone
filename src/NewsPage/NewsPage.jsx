import React from 'react'
import './NewsPage.css'
import NewsData from './NewsData.js'

function NewsPage() {
    return (
        <div className='NewsPage'>
            <p>News</p>
            <div className="NewsPage-Recent">

                <div className="RecentNews-Card">

                    <div className="RecentNews-Card-Thumb">
                        <img src={NewsData[0].thumb} alt="" />
                    </div>

                    <div className="timestamp">{NewsData[0].timestamp} DAYS AGO</div>
                    <div className="description">{NewsData[0].description}</div>
                    <p className='linkButton'>View Game</p>
                </div>

                <div className="RecentNews-Card">

                    <div className="RecentNews-Card-Thumb">
                        <img src={NewsData[1].thumb} alt="" />
                    </div>

                    <div className="timestamp">{NewsData[1].timestamp} DAYS AGO</div>
                    <div className="description">{NewsData[1].description}</div>
                    <p className='linkButton'>Read More</p>
                </div>

            </div>

        </div>
    )
}

export default NewsPage
