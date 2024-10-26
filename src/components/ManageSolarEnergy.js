import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSolarEnergy = () => {
    const [solarData, setSolarData] = useState([]);
    const [batteryStatus, setBatteryStatus] = useState('Discharging'); // Default status
    const [excessEnergy, setExcessEnergy] = useState(0);
    
    useEffect(() => {
        // Fetch recent solar energy and consumption data
        const fetchSolarData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/solar_data'); // Ensure you have an endpoint that returns solar data
                setSolarData(response.data);
            } catch (error) {
                console.error('Error fetching solar data:', error);
            }
        };

        fetchSolarData();
    }, []);

    const manageSolarEnergy = () => {
        // Assuming solarData contains objects with keys: energyProduced and energyConsumed
        let totalProduced = 0;
        let totalConsumed = 0;

        solarData.forEach(data => {
            totalProduced += data.energyProduced; // Total energy produced from solar panels
            totalConsumed += data.energyConsumed; // Total energy consumed
        });

        // Calculate excess energy
        const excess = totalProduced - totalConsumed;
        setExcessEnergy(excess);

        // Determine battery status
        if (excess > 0) {
            setBatteryStatus('Charging');
        } else {
            setBatteryStatus('Discharging');
        }
    };

    return (
        <div>
            <h2>Manage Solar Energy</h2>
            <button onClick={manageSolarEnergy}>Manage Energy</button>
            {solarData.length > 0 && (
                <div>
                    <h3>Solar Energy Data</h3>
                    <ul>
                        {solarData.map((data, index) => (
                            <li key={index}>
                                Energy Produced: {data.energyProduced} kWh, Energy Consumed: {data.energyConsumed} kWh
                            </li>
                        ))}
                    </ul>
                    <h3>Total Excess Energy: {excessEnergy} kWh</h3>
                    <h3>Battery Status: {batteryStatus}</h3>
                </div>
            )}
        </div>
    );
};

export default ManageSolarEnergy;
