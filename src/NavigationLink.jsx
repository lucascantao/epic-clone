import React from 'react'
import { Link } from 'react-router-dom';
import './NavigationLink.css'

function NavigationLink({ selected, title, path }) {
    return (
        <Link to={path} className='NavLink'>
            <div className={`NavigationLink ${selected && 'selected'}`}>
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default NavigationLink
