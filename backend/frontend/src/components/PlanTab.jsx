import React from 'react'
import './planTab.css'
export default function PlanTab({data}) {

  return (
    <div className='plan-tab-container'>
      <div className='weather-details-container'>
        <div className='weather-details'>
            <h3 className='weather-details-text'>{data.weather.degree}°C</h3>
            <img className='weather-details-image' src={`src/assets/${data.weather.status.toLowerCase()}.png`} alt="weather" />
            <h3 className='weather-details-text'>{data.weather.status}</h3>
        </div>
        <div className='date-details'>
            <h3 className='date-details-text'>{data.date}</h3>
        </div>
      </div>
        <h1 className='plan-tab-title'>{data.name}</h1>
        <div className='plan-tab-content'>
            <div className='plan-tab-description'>
                <p className='plan-tab-description-text'>{data.description}</p>
              </div>
            
        </div>
    </div>
  )
}
