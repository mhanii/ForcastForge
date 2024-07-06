import React from 'react';
import './css/yahoo.css';
import { useIP } from '../../common/Context';
import axios from 'axios';
import { useState, useEffect } from 'react';

const WeatherForecast = () => {
    const { city } = useIP();
    const { WeatherForecast, updateWeatherForecast } = useIP();
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const { IP } = useIP();

    const fetchForecast = async () => {
        try {
            // const response = await axios.get(`http://localhost:8000/api/daily_normal/?city=${city}`);
            // setForecast(response.data);
            // setError(null);
            setForecast({
                "location": {
                  "city": "Istanbul",
                  "woeid": 2344116,
                  "country": "Turkey",
                  "lat": 41.040852,
                  "long": 28.986179,
                  "timezone_id": "Europe/Istanbul"
                },
                "current_observation": {
                  "pubDate": 1720179528,
                  "wind": {
                    "chill": 81,
                    "direction": "North",
                    "speed": 16
                  },
                  "atmosphere": {
                    "humidity": 50,
                    "visibility": 14.98,
                    "pressure": 1013.2
                  },
                  "astronomy": {
                    "sunrise": "5:39 AM",
                    "sunset": "8:39 PM"
                  },
                  "condition": {
                    "temperature": 83,
                    "text": "Cloudy",
                    "code": 26
                  }
                },
                "forecasts": [
                  {
                    "day": "Fri",
                    "date": 1720195200,
                    "high": 84,
                    "low": 70,
                    "text": "Mostly Sunny",
                    "code": 34
                  },
                  {
                    "day": "Sat",
                    "date": 1720281600,
                    "high": 88,
                    "low": 71,
                    "text": "Sunny",
                    "code": 32
                  },
                  {
                    "day": "Sun",
                    "date": 1720368000,
                    "high": 90,
                    "low": 70,
                    "text": "Sunny",
                    "code": 32
                  },
                  {
                    "day": "Mon",
                    "date": 1720454400,
                    "high": 90,
                    "low": 74,
                    "text": "Sunny",
                    "code": 32
                  },
                  {
                    "day": "Tue",
                    "date": 1720540800,
                    "high": 92,
                    "low": 75,
                    "text": "Sunny",
                    "code": 32
                  },
                  {
                    "day": "Wed",
                    "date": 1720627200,
                    "high": 89,
                    "low": 74,
                    "text": "Sunny",
                    "code": 32
                  },
                  {
                    "day": "Thu",
                    "date": 1720713600,
                    "high": 85,
                    "low": 70,
                    "text": "Mostly Sunny",
                    "code": 34
                  },
                  {
                    "day": "Fri",
                    "date": 1720800000,
                    "high": 80,
                    "low": 72,
                    "text": "Mostly Cloudy",
                    "code": 28
                  },
                  {
                    "day": "Sat",
                    "date": 1720886400,
                    "high": 84,
                    "low": 78,
                    "text": "Partly Cloudy",
                    "code": 30
                  },
                  {
                    "day": "Sun",
                    "date": 1720972800,
                    "high": 81,
                    "low": 68,
                    "text": "Sunny",
                    "code": 32
                  },
                  {
                    "day": "Mon",
                    "date": 1721059200,
                    "high": 82,
                    "low": 69,
                    "text": "Sunny",
                    "code": 32
                  }
                ]
              })
              updateWeatherForecast(forecast);
        } catch (err) {
            setError('Error fetching forecast data');
            setForecast(null);
        }
    };
    
    useEffect(() => {
        fetchForecast();
        // console.log("REQUESTED")
    }, [city]);
    // console.log(city)
    const getWeatherEmoji = (code) => {
        switch (code) {
            case 32: return '☀️';
            case 24: return '💨';
            case 11: return '🌧️';
            case 34: return '⛅';
            default: return '🌤️';
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    };

    if (!forecast) {
        return <div>Loading...</div>;
    }

    const { location, current_observation, forecasts } = forecast;
    // console.log(forecast)
    return (
        <div className="weather-container-yahoo">
          <h1>Today</h1>
            <div className="current-weather">
                <div className="date-location">
                    <span>{formatDate(current_observation.pubDate)}</span>
                    <span>{location.city}</span>
                </div>
                <div className="current-temp">
                    <span className="emoji">{getWeatherEmoji(current_observation.condition.code)}</span>
                    <span className="temp">{current_observation.condition.temperature}°</span>
                    <span className="low-high">/{forecasts[0].low}°</span>
                </div>
                <div className="weather-description">{current_observation.condition.text}</div>
                <div className="details_container">

                <div className="weather-details_1">
                    <div>Feels like: {current_observation.condition.temperature}°</div>
                    <div>Visibility:{current_observation.atmosphere.visibility} km</div>
                    <div>Wind: {current_observation.wind.direction} {current_observation.wind.speed} km/h</div>
                </div>
                <div className="weather-details_2">
                    <div>Humidity: {current_observation.atmosphere.humidity}%</div>
                    <div>Pressure: {current_observation.atmosphere.pressure}hPa</div> 
                </div>
                </div>

            </div>
              <h1>Next {forecasts.length -1} days</h1>
              <div className='empty-forecast'></div>
                {forecasts.slice(1, forecasts.length).map((day, index) => (
                    <div key={index} className="forecast-day">
                        <div className="date-location">
                            <span>{day.day}</span>
                            <span>{formatDate(day.date)}</span>
                        </div>
                        <div className="forecast-temp">
                            <span className="emoji">{getWeatherEmoji(day.code)}</span>
                            <span className="temp">{day.high}°</span>
                            <span className="low-high">/{day.low}°</span>
                        </div>
                        <div className="weather-description">{day.text}</div>
                        <div className="weather-details">
                            <div>RealFeel: {day.high}°</div>
                            <div>Max UV Index: 11 Extreme</div>
                            <div>Wind: W 41 km/h</div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default WeatherForecast;