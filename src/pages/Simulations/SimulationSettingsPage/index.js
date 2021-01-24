import React from 'react'
import SettingsForm from '../../../components/Simulations/SettingsForm'


const SimulationSettingPage = ({ simulation, loading, error }) => {
  return (
    <div>
      <SettingsForm simulation={simulation} loading={loading} error={error} />
    </div>
  )
}

export default SimulationSettingPage
