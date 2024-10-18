import React, { useState } from 'react'

const CaloriesTracker = () => {
    const [calories, setCalories] = useState(0);
  return (
    <div className='calories-tracker'>
        <h2>Calories Tracker</h2>
        <p>Total Calories: {calories}</p>
        <button className='btn' onClick={() => setCalories(calories + 100)}>
            Add 100 Calories
        </button>
    </div>
  )
}

export default CaloriesTracker;