import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/predict-tariff">Predict Tariff</Link></li>
                <li><Link to="/predict-consumption">Predict Consumption</Link></li>
                <li><Link to="/forecast-solar-energy">Forecast Solar Energy</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
