import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommonStyles.css'; // Import the shared CSS file

const PredictConsumption = () => {
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrediction = async () => {
            const recentFeatures = [100, 0.7, 0.2, 0.5, 0.3, 0.4];

            try {
                const response = await axios.post('http://localhost:5000/predict_energy_consumption', { features: recentFeatures });
                setPrediction(response.data.predicted_consumption);
            } catch (error) {
                console.error('Error predicting consumption:', error);
                setError('Error fetching prediction');
            } finally {
                setLoading(false);
            }
        };

        fetchPrediction();
    }, []);

    return (
        <div className="prediction-box"> {/* Apply the common class */}
            <h4>Predicted Energy Consumption</h4>
            <p>
                {loading ? (
                    'Loading...'
                ) : error ? (
                    error
                ) : (
                    <span>
                        {prediction} kWh
                        <span style={{ fontSize: '0.8rem' }}> (predicted)</span>
                    </span>
                )}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
                This prediction estimates energy consumption for the upcoming period based on recent data.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#333' }}>
                The predicted energy consumption helps you understand how much energy you're likely to use, which can assist in planning energy savings or scheduling energy-intensive tasks.
            </p>
        </div>
    );
};

export default PredictConsumption;
