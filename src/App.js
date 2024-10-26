import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PredictTariff from './components/PredictTariff';
import PredictConsumption from './components/PredictConsumption';
import ForecastSolarEnergy from './components/ForecastSolarEnergy';
import ScheduleAppliances from './components/ScheduleAppliances';
import ManageSolarEnergy from './components/ManageSolarEnergy';
import Recommendations from './components/Recommendations';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/predict-tariff" element={<PredictTariff />} />
                <Route path="/predict-consumption" element={<PredictConsumption />} />
                <Route path="/forecast-solar-energy" element={<ForecastSolarEnergy />} />
                <Route path="/schedule-appliances" element={<ScheduleAppliances />} />
                <Route path="/manage-solar-energy" element={<ManageSolarEnergy />} />
                <Route path="/recommendations" element={<Recommendations />} />
            </Routes>
        </Router>
    );
};

export default App;
