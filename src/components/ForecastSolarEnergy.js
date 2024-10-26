import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommonStyles.css'; // Import the shared CSS file

const ForecastSolarEnergy = () => {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForecast = async () => {
            const recentSolarData = [10, 12, 15, 20, 25]; // Example recent data

            try {
                const response = await axios.post('http://localhost:5000/forecast_solar_energy', { solar_generation: recentSolarData });
                setForecast(response.data.forecasted_energy);
            } catch (error) {
                console.error('Error forecasting solar energy:', error);
                setError('Error fetching forecasted solar energy.');
            } finally {
                setLoading(false);
            }
        };

        fetchForecast();
    }, []);

    return (
        <div className="prediction-box"> {/* Apply the common class */}
            <h4>Forecasted Solar Energy</h4>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <p> {forecast.join(', ')} kWh</p>
            )}
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
                This forecast indicates the expected solar energy production for the next day, based on weather and historical data.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#333' }}>
                Knowing the forecasted solar energy helps in optimizing energy usage and deciding when to rely on solar power.
            </p>
        </div>
    );
};

export default ForecastSolarEnergy;
