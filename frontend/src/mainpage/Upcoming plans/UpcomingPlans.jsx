import React, { useState } from 'react';
import './UpcomingPlans.css';
import PlanTab from '../../components/PlanTab';
import { useIP } from '../../common/Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function UpcomingPlans({ plans, setPlans }) {
    const { weatherForecast } = useIP();
    const [showForm, setShowForm] = useState(false);
    const [newPlan, setNewPlan] = useState({
        name: '',
        type: '',
        location: '',
        date: null,
        text: null,
        high: null,
        low:null,
        icon: null
    });

    const handleInputChange = (e) => {
        setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
    };
    const getWeatherEmoji = (code) => {
        switch (code) {
            case 32: return '☀️';
            case 24: return '💨';
            case 11: return '🌧️';
            case 34: return '⛅';
            default: return '🌤️';
        }
    };
    const today = new Date();
    const maxDate = new Date(today);
    if (weatherForecast?.forecasts) {
        maxDate.setDate(maxDate.getDate() + weatherForecast.forecasts.length - 1);
    }
    const handleDateChange = (date) => {
        const timeDiff = date.getTime() - today.getTime();
        let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1;


        let weatherData = null;
        if (weatherForecast?.forecasts) {
            weatherData = weatherForecast.forecasts[daysDiff];
            console.log(weatherForecast.forecasts[daysDiff])
        }
        console.log(weatherData.high)

        setNewPlan({
            ...newPlan,
            date: date,
            text: weatherData ? weatherData.text : null,
            high: weatherData ? Math.round(weatherData.high) : null,
            low: weatherData ? Math.round(weatherData.low) : null,
            icon: weatherData ? getWeatherEmoji(weatherData.code) : null
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlans([...plans, newPlan]);
        console.log(newPlan)
        setShowForm(false);
        setNewPlan({
            name: '',
            type: '',
            location: '',
            date: new Date(),
            weather: null,
            degree: null,
            icon: null
        });
    };



    return (
        <div className='upcoming-plans-container'>
            {plans && plans.length > 0 ? (<></>) : (<h1 className='upcoming-plans-title'>¡Sin planes!</h1>)}
            <div className="upcoming-plans">
                {plans && plans.length > 0 ? (
                    plans.map((plan, i) => <PlanTab key={i} data={plan} />)
                ) : (
                    <></>
                )}

                <div className="upcoming-plans-empty">
                    {!showForm ? (
                        <div className='add-plan-container' onClick={() => setShowForm(true)}>
                            <h1 className='add-plan-button'>+</h1>
                        </div>
                    ) : (
                        <form className="add-plan-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Nombre de la actividad" 
                                value={newPlan.name} 
                                onChange={handleInputChange} 
                                required 
                            />
                            <select 
                                name="type" 
                                value={newPlan.type} 
                                onChange={handleInputChange} 
                                required
                            >
                                <option value="">Tipo de actividad</option>
                                <option value="Sports">Deportes</option>
                                <option value="Social">Social</option>
                                <option value="Work">Trabajo</option>
                            </select>
                            <select 
                                name="location" 
                                value={newPlan.location} 
                                onChange={handleInputChange} 
                                required
                            >
                                <option value="">Ubicación</option>
                                <option value="Indoor">Interior</option>
                                <option value="Outdoor">Exterior</option>
                            </select>
                            <DatePicker
                                selected={newPlan.date}
                                onChange={handleDateChange}
                                showTimeSelect
                                dateFormat="Pp"
                                minDate={today}
                                maxDate={maxDate}
                                placeholderText="Select Date & Time"
                                required
                            />
                            <button type="submit">Agregar Plan</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}