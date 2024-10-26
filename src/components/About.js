import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => {
    return (
        <div className="about-page">
            <div className="row">
                <div className="containers col-lg-6 col-md-6">
                    <div className="pic"></div>
                    <div className="box1"></div>
                    <div className="box2"></div>

                    <div className="social1">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div className="social2">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                    </div>
                    <div className="social3">
                        <i className="fa fa-codepen" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="content col-md-offset-6 col-lg-offset-6">
                    <center><h1 className="contentHead">ABOUT THE TECHNox PROJECT</h1></center>
                    
                    <h2>TechnoX Problem Statement</h2>
                    <p>
                        The TechnoX challenge is focused on developing a solution that optimizes energy consumption using renewable resources. 
                        Participants are tasked with creating a comprehensive platform that analyzes energy usage patterns and proposes 
                        effective strategies for users to reduce their carbon footprint while maximizing efficiency.
                    </p>
                    
                    <h2>Proposed Solution</h2>
                    <p>
                        Our solution involves creating an integrated application that leverages advanced predictive analytics and 
                        machine learning models to achieve the following objectives:
                    </p>
                    <ul>
                        <li>Predict tariff rates using historical data and consumption patterns.</li>
                        <li>Forecast solar energy production based on weather data and historical trends.</li>
                        <li>Analyze energy consumption to identify peak usage periods and recommend optimal appliance scheduling.</li>
                        <li>Provide personalized recommendations based on user habits and energy efficiency metrics.</li>
                    </ul>
                    <p>
                        By implementing these features, the application aims to empower users to make informed decisions about their 
                        energy consumption, ultimately contributing to a more sustainable future.
                    </p>
                    
                    <h2>Get Involved</h2>
                    <p>
                        Join us in our mission to innovate energy management solutions. Together, we can create a more sustainable world!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
