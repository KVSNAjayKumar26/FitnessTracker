import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <h1>Fitness Tracker Dashboard</h1>
        <div className='cards'>
            <div className='card'>Workouts</div>
            <div className='card'>Calories</div>
            <div className='card'>Progress</div>
        </div>
    </div>
  );
};

export default Dashboard;