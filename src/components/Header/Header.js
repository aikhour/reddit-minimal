import React from 'react';

import './header.css';

// component import
import SearchBar from '../searchBar/searchBar';

export default function Header() {
    return (
        <div className="header">
            <h1>Reddit <span className='blue'>Minimal</span></h1>

            <input 
                className="searchBar"
                type="text"/>
        </div>
    )
};