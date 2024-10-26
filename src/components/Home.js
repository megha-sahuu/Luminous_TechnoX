import React from 'react';
import PredictTariff from './PredictTariff';
import PredictConsumption from './PredictConsumption';
import ForecastSolarEnergy from './ForecastSolarEnergy';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from 'chart.js'; 
import './Home.css';

// Register the necessary scales and elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const Home = () => {
    // Sample data for the graph (replace with real data)
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Energy Consumption (kWh)',
                data: [12, 19, 3, 5, 2, 3, 7], // Replace with actual consumption data
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
            {
                label: 'Solar Energy Production (kWh)',
                data: [2, 3, 20, 5, 1, 4, 15], // Replace with actual production data
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Weekly Energy Consumption vs. Solar Energy Production',
            },
        },
    };

    return (
        <section className="home-container">
            <div className="title">
                <span></span>
                <span> <a target="_blank" rel="noopener noreferrer" href="https://salfia.com">Web Developer</a></span>
            </div>

            <div className="prediction-boxes">
                <div className="prediction-box">
                    <h3 className='titl'>Predicted Tariff for Tomorrow</h3>
                    <PredictTariff />
                </div>
                <div className="prediction-box">
                    <h3 className='titl'>Predicted Energy Consumption</h3>
                    <PredictConsumption />
                </div>
                <div className="prediction-box">
                    <h3 className='titl'>Forecasted Solar Energy Production</h3>
                    <ForecastSolarEnergy />
                </div>
            </div>

            <div className="graph-container">
                <h2>Weekly Energy Overview</h2>
                <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
                    This graph provides a weekly comparison between your energy consumption and solar energy production. 
                    Monitoring this allows you to identify patterns in energy usage and solar power generation. 
                    High solar energy production can reduce the need to rely on grid electricity, potentially lowering costs.
                </p>
                <Line data={data} options={options} />
            </div>
        </section>
    );
};

export default Home;
