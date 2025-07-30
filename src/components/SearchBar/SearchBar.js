import React, {useState} from 'react';

// icon import
import icon from './search.png';
// https://www.flaticon.com/free-icons/magnifying-glass"

//imports
import '../SearchBar/searchbar.css';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
    // dispatch
    const dispatch = useDispatch();

    // local state
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'feed/setSearchTerm',
            payload: term
        });
    }
    
    return (
        <form className='searchBar'>
            <input 
                type='text'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <button>
                <img 
                    className='searchButton'
                    src={icon} 
                    alt="search button"
                    onClick={handleSubmit}
                />
            </button>
        </form>
    )
}