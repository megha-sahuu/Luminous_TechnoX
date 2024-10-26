import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Ensure to import the CSS file

const Navbar = () => {
    const location = useLocation(); // Get the current location
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Predict Tariff', path: '/predict-tariff' },
        { name: 'Predict Consumption', path: '/predict-consumption' },
        { name: 'Forecast Solar Energy', path: '/forecast-solar-energy' },
        { name: 'Manage Solar Energy', path: '/manage-solar-energy' },
        { name: 'Schedule Appliances', path: '/schedule-appliances' },
        { name: 'Recommendations', path: '/recommendations' },
        { name: 'About', path: '/about' },
    ];

    return (
        <header>
            <nav>
                <div className="navbar-logo">Luminous TechnoX</div>
                <ul id="navbarSupportedContent">
                    {navItems.map((item) => (
                        <li key={item.name} className={location.pathname === item.path ? 'active' : ''}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
