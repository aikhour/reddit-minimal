import React from 'react';

import './header.css';

// component import
import SearchBar from '../SearchBar/SearchBar';
import SignIn from '../SignIn/SignIn';

export default function Header() {
    return (
        <div className="header">
            <h1>Reddit <span className='blue'>Minimal</span></h1>

            <SearchBar/>

            <SignIn />
        </div>
    )
};