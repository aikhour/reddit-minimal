import React, {useState} from 'react';

//imports
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
        <form onSubmit={handleSubmit} className='searchBar'>
            <input 
                type='text'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <button
                type="submit"
            >
                Search
            </button>
        </form>
    )
}