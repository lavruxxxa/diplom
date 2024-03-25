import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {

    return (
            <div className='navigation-container'>
            <ul className='navigation-links'>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/trades">Trades</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
            </ul>
            </div>
    );
}

export default Navigation;
