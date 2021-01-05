import React from 'react'
import './FooterPage.css'

import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

function FooterPage() {
    return (
        <div className='FooterPage'>
            <div className="contacts">
                <FacebookIcon className='contactIcon' />
                <TwitterIcon className='contactIcon' />
                <YouTubeIcon className='contactIcon' />
            </div>
            <div className="resources">
                <p className='footerLink-title' >Resources</p>
                <div className="footerLinks">
                    <p>Suport a Creator</p>
                    <p>Company</p>
                    <p>Store EULA</p>
                    <p>Publish on Epic Games</p>
                    <p>Fan Art Policy</p>
                    <p>Online Services</p>
                    <p>Careers</p>
                    <p>UX Reseach</p>
                    <p>Community Rules</p>

                </div>
            </div>
            <div className="madeByEpicGames">
                <p className='footerLink-title' >Made by Epic Games</p>
                <div className="footerLinks">
                    <p>Battle Breakers</p>
                    <p>Shadow Complex</p>
                    <p>Fortnite</p>
                    <p>Spyjinx</p>
                    <p>Infinity Blade</p>
                    <p>Unreal Tournament</p>
                    <p>Robo Recall</p>

                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>© 2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   </p>
            </div>
            <div className="bottom">
                <p>Terms of Service</p>
                <p>Privace Police</p>
                <p>Store Refund Policy</p>
            </div>
        </div>
    )
}

export default FooterPage