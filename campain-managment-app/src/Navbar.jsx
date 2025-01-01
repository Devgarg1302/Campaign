import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav>
            <label className="logo">
                <i className="fas fa-heartbeat"></i>CRM
            </label>
            <ul>
                <li><Link to="/">Audience Creation</Link></li>
                <li><Link to="/campaigns">Campaigns</Link></li>
                <li><Link to="/group">Groups</Link></li>
            </ul>
        </nav>
    );
};

export default Header;