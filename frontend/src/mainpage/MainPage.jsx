import React from 'react'
import './mainpage.css'
import Calendar from '../calendar-components/CalendarApp'
import UpcomingPlans from './Upcoming plans/UpcomingPlans'
export default function MainPage() {
  return (
    <div className={"mainpage-main-container"}>
      
        <h1 className='mainpage-title'>ForecastForge</h1>
        <h3 className='mainpage-subtitle'>¡Bienvenido! ¿Qué tienes en mente?</h3>
        <UpcomingPlans children={[]}/>
        <Calendar />
    </div>
  )
}
