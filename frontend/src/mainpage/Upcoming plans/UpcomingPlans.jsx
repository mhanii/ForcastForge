import React from 'react'
import './UpcomingPlans.css'
export default function UpcomingPlans({children}) {
    if (children.length === 0) {
        return (
            <div className="upcoming-plans-container">
                <h1 className='upcoming-plans-title'>¡Sin planes próximos!</h1>
                <div className="upcoming-plans-empty">
                    <div className='add-plan-container'>
                        <h1 className='add-plan-button'>+</h1>
                    </div>
                </div>
            </div>      
        )
    }
  return (
    <div>
        <h1>Upcoming Plans:</h1>
        {/* children.forEach(plan => {
            
        }); */}
    </div>
  )
}
