import React from 'react'
import { Link } from 'react-router-dom';
import './NavigationLink.css'

function NavigationLink({selected, index, reset, title, path }) {

    function handleClick() {
        reset(index)
    }

    return (
        <Link to={path} className='NavLink'>
            <div onClick={handleClick} className={`NavigationLink ${selected && 'selected'}`}>
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default NavigationLink
