import React from 'react';

import './header.css';

// component import
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
    return (
        <div className="header">
            <h1>Reddit <span className='blue'>Minimal</span></h1>

            <SearchBar/>

            <button>
                Sign In
            </button>

            <button>
                Register
            </button>
        </div>
    )
};