import React from 'react'
import './mainpage.css'
import Calendar from '../calendar-components/CalendarApp'
import UpcomingPlans from './Upcoming plans/UpcomingPlans'
export default function MainPage() {
  const children = [{
    name: "Plan 1",
    description: "Plan 1 description",
    date: "17/04/2024",
    weather: {
      degree: 25,
      status: "Sunny",
      icon: "sunny.png"
    }},]

  return (
    <div className={"mainpage-main-container"}>
      
        <h1 className='mainpage-title'>ForecastForge</h1>
        <h3 className='mainpage-subtitle'>¡Bienvenido! ¿Qué planes tienes en mente?</h3>
        <UpcomingPlans plans={children}/>
        <Calendar />
    </div>
  )
}
