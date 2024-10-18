import React from 'react'
import Dashboard from './components/Dashboard'
import Workouts from './components/Workouts'
import CaloriesTracker from './components/CaloriesTracker'
import ProgressTracker from './components/ProgressTracker'
import Settings from './components/Settings'
import './styles/main.scss';
const App = () => {
  return (
    <div className='App'>
      <Dashboard />
      <Workouts />
      <CaloriesTracker />
      <ProgressTracker />
      <Settings />
    </div>
  );
}

export default App;