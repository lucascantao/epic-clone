import React from 'react'
import LanguageIcon from '@material-ui/icons/Language'
import PersonIcon from '@material-ui/icons/Person'
import NavigationLink from './NavigationLink'
import './NavigationBar.css'

function NavigationBar() {

    return (
        <div className={`NavigationBar`}>
            <div className="NavigationBar-left">
                {/* <img src="https://www.telepolis.pl/images/miniatury/epicgames-logo.jpg" alt="" /> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/516px-Epic_Games_logo.svg.png" alt="" />
                <div className="NavigationBar-links">
                    <NavigationLink selected title='Store' path='/store'/>
                    <NavigationLink title='News' path='/news' />
                    <NavigationLink title='FAQ' path='#' />
                    <NavigationLink title='Help' path='#' />
                    <NavigationLink title='Unreal Engine' path='#' />
                </div>
            </div>

            <div className="NavigationBar-right">
                <LanguageIcon className='language-select' />
                <div className="login">
                    <PersonIcon />
                    <p>Login</p>
                </div>
                <div className="download-epic">
                    <p>Get Epic Games</p>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar