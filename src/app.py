from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load models
rf_model = joblib.load('model_consumption.pkl')  # Random Forest model for energy consumption
model_arima_fit = joblib.load('model_arima.pkl')  # ARIMA model for solar energy forecasting
scaler = joblib.load('scaler.pkl')  # Load the scaler for tariff model preprocessing (if needed)

@app.route('/predict_tariff', methods=['POST'])
def predict_tariff():
    data = request.get_json()
    try:
        # For simplicity, let's assume we return a static prediction as we're not using LSTM.
        # This can be replaced with your own logic or a different model.
        # If you have a specific calculation for tariff, implement it here.
        predicted_tariff = 10.0  # Example static prediction
        return jsonify({'predicted_tariff': predicted_tariff})
    except Exception as e:
        print(f"Error predicting tariff: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/predict_energy_consumption', methods=['POST'])
def predict_energy_consumption():
    data = request.get_json()
    try:
        # Ensure input has the correct number of features (6)
        if len(data['features']) != 6:
            return jsonify({'error': 'Input must have 6 features'}), 400

        features = np.array(data['features']).reshape(1, -1)  # Reshape for Random Forest
        prediction = rf_model.predict(features)
        return jsonify({'predicted_consumption': prediction[0]})
    except Exception as e:
        print(f"Error predicting energy consumption: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/forecast_solar_energy', methods=['POST'])
def forecast_solar_energy():
    data = request.get_json()
    print(f"Received data for solar energy forecast: {data}")  # Log input data

    if 'solar_generation' not in data or len(data['solar_generation']) == 0:
        return jsonify({'error': 'Invalid input data'}), 400

    # Prepare new data for forecasting
    new_data = pd.Series(data['solar_generation'], index=pd.date_range(start='2024-01-01', periods=len(data['solar_generation'])))
    print(f"Input Series for ARIMA: {new_data}")  # Log input series

    # Forecast using the ARIMA model
    forecast = model_arima_fit.forecast(steps=len(new_data))
    print(f"Forecasted solar energy: {forecast.tolist()}")  # Log forecast result

    return jsonify({'forecasted_energy': forecast.tolist()})
@app.route('/schedule_appliances', methods=['POST'])
def schedule_appliances():
    # Logic to schedule appliances based on current tariff rates
    # Example schedule logic
    data = request.get_json()
    appliances = data.get('appliances', [])
    scheduled = [{'appliance': app, 'schedule': 'run' if app['tariff_rate'] < 0.2 else 'wait'} for app in appliances]
    return jsonify({'scheduled_appliances': scheduled})

# Manage Solar Energy Model
@app.route('/manage_solar_energy', methods=['POST'])
def manage_solar_energy():
    data = request.get_json()
    production = data.get('production', 0)
    consumption = data.get('consumption', 0)

    excess_energy = production - consumption
    battery_status = 'charge' if excess_energy > 0 else 'discharge'
    
    return jsonify({'excess_energy': excess_energy, 'battery_status': battery_status})

# Recommendations Model
@app.route('/get_recommendations', methods=['POST'])
def get_recommendations():
    data = request.get_json()
    consumption_data = data.get('consumption_data', [])

    recommendations = []
    for entry in consumption_data:
        if entry['tariff_rate'] < 0.2:  # Example condition for recommendation
            recommendations.append('Use high-energy appliances')
        else:
            recommendations.append('Delay usage')

    return jsonify({'recommendations': recommendations})


if __name__ == '__main__':
    app.run(debug=True)
