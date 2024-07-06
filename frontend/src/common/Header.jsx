import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className={"header-main-container"}>
      
      <div className='logo-container'><a className='logo'>ForecastForge</a></div>
      <div className='other-buttons-container'>
        <button className='header-button about-us'>Nosotros</button>
        <button className='header-button contact-us'>Contactanos</button>
        <button  className='header-button pricing' >Precios</button>
      </div>
      <div className="account-buttons-container">
        <button className="header-button log-in">Iniciar sesión</button>
        <button className="header-button sign-up">Inscribirse</button>
      </div>
    </div>
  )
}
