import React from 'react'
import './UpcomingPlans.css'
import PlanTab from '../../components/PlanTab'
export default function UpcomingPlans({plans}) {
    if (plans.length === 0) {
        return (
            <div className="upcoming-plans-container">
                <h1 className='upcoming-plans-title'>¡Sin planes próximos!</h1>
                
            </div>      
        )
    }
  return (
    <div className='upcoming-plans-container'>
        <h1 className='upcoming-plans-title'>{plans.length?"Próximos planes:":"¡Sin planes proxiómos!"}</h1>
        <div className="upcoming-plans">
            {plans.map((plan, i) => <PlanTab key={i} data={plan}/>)}
            <div className="upcoming-plans-empty">
                    <div className='add-plan-container'>
                        <h1 className='add-plan-button'>+</h1>
                    </div>
            </div>
        </div>

    </div>
  )
}
