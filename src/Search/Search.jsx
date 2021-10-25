import { useState } from 'react';
import './Search.css'

const Search = (props) => {

    const [value, setValue] = useState();
    
    const setValueHandler = e => setValue(e.target.value);

    return (
        <div className='search'>
            <input 
                className='search__input' 
                type="text" 
                placeholder='Поиск...' 
                value={value || ''} 
                onChange={setValueHandler} />
            <button 
                className='search__btn'
                onClick={() => props.onClickedSearch(value)} >Найти</button>
        </div>
    )
}

export default Search;