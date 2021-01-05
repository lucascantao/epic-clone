import React from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './StoreHeader.css'

function StoreHeader() {
    return (
        <div className='StoreHeader'>
            <div className="tab-links">
                <Link className='tab-link' to='/store/'><p>Discover</p></Link>
                <Link className='tab-link' to='/store/browse'><p>Browse</p></Link>

            </div>
            <div className="StoreHeader-input">
                <SearchIcon className='SearchIcon'/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
    )
}

export default StoreHeader
