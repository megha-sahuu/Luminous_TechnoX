import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommonStyles.css'; // Import the shared CSS file

const PredictTariff = () => {
    const [prediction, setPrediction] = useState(null);

    useEffect(() => {
        const fetchPrediction = async () => {
            const recentFeatures = [1, 0.5, 0.3, 0.2, 0.1];

            try {
                const response = await axios.post('http://localhost:5000/predict_tariff', { features: recentFeatures });
                setPrediction(response.data.predicted_tariff);
            } catch (error) {
                console.error('Error predicting tariff:', error);
            }
        };

        fetchPrediction();
    }, []);

    return (
        <div className="prediction-box"> {/* Apply the common class */}
            <h4>Predicted Electricity Tariff</h4>
            <p>
                {prediction !== null ? (
                    <span>
                        ₹{prediction.toFixed(2)}
                        <span style={{ fontSize: '0.8rem' }}> (per unit)</span>
                    </span>
                ) : (
                    <p>Loading...</p>
                )}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
                This prediction estimates the cost of electricity per unit (kWh) for the upcoming day, based on historical data, current trends, and external factors like weather patterns and grid demand.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#333' }}>
                The predicted electricity tariff gives an estimate of how much you'll pay per unit of electricity tomorrow, helping you plan your energy usage accordingly.
            </p>
        </div>
    );
};

export default PredictTariff;
