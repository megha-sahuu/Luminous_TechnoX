import React, { useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
    const [consumptionData, setConsumptionData] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    const handleRecommendations = async () => {
        try {
            const response = await axios.post('http://localhost:5000/get_recommendations', {
                consumption_data: consumptionData,
            });
            setRecommendations(response.data.recommendations);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    return (
        <div>
            <h2>Recommendations</h2>
            <button onClick={handleRecommendations}>Get Recommendations</button>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
