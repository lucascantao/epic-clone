import React, {useState} from 'react'
import LanguageIcon from '@material-ui/icons/Language'
import PersonIcon from '@material-ui/icons/Person'
import NavigationLink from './NavigationLink'
import './NavigationBar.css'

function NavigationBar() {

    const [selection, setSelection] = useState([false, false, false, false, false])

    function resetSelection(index) {
        setSelection([false, false, false, false, false])
        setSelection(prev => {
            
            const newSelection = prev
            newSelection[index] = true
            return [...newSelection]
        })
        
    }



    return (
        <div className={`NavigationBar`}>
            <div className="NavigationBar-left">
                {/* <img src="https://www.telepolis.pl/images/miniatury/epicgames-logo.jpg" alt="" /> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/516px-Epic_Games_logo.svg.png" alt="" />
                <div className="NavigationBar-links">
                    <NavigationLink index={0} selected={selection[0]} reset={resetSelection} title='Store' path='/store'/>
                    <NavigationLink index={1} selected={selection[1]} reset={resetSelection} title='News' path='/news' />
                    <NavigationLink index={2} selected={selection[2]} reset={resetSelection} title='FAQ' path='#' />
                    <NavigationLink index={3} selected={selection[3]} reset={resetSelection} title='Help' path='#' />
                    <NavigationLink index={4} selected={selection[4]} reset={resetSelection} title='Unreal Engine' path='#' />
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