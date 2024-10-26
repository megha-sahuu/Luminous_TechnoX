// ScheduleAppliances.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScheduleAppliances = () => {
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('http://localhost:5000/schedule_appliances'); // Adjust the endpoint
                setSchedules(response.data);
            } catch (error) {
                console.error('Error fetching schedules:', error);
                setError('Error fetching schedules.');
            } finally {
                setLoading(false);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div>
            <h2>Scheduled Appliances</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {schedules.map((schedule, index) => (
                        <li key={index}>{schedule.appliance}: {schedule.time}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ScheduleAppliances;
