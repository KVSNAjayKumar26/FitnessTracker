import React, { useState } from 'react'

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = (workout) => {
        setWorkouts([...workouts, workout]);
    };
  return (
    <div className='workouts'>
        <h2>Track your workouts</h2>
        <button className='btn' onClick={() => addWorkout("Running")}>
            Add Workout
        </button>
        <ul>
            {workouts.map((workout, index) => (
                <li key={index}>{workout}</li>
            ))}
        </ul>
    </div>
  );
};

export default Workouts;