import React, {useState} from 'react'
import './FilterCategory.css'
import ExpandeMoreIcon from '@material-ui/icons/ExpandMore'


function FilterCategory({title, categories}) {

    const [showCategories, setShowCategories] = useState(false);

    return (
        <div className='FilterCategory'> 
            <button onClick={() => { setShowCategories(!showCategories) }}>
                <p>{title}</p>
                <ExpandeMoreIcon className={`ExpandIcon ${showCategories && 'expanded'}`}/>
            </button>
            {categories.map(category => <p className='category' hidden={showCategories}>{category}</p>)}
        </div>
    )
}

export default FilterCategory
