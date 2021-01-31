import React, { useEffect } from 'react'
import SettingsForm from '../../../components/Simulations/SettingsForm'
import { useStore } from '../../../store/storeContext'
import { useSessionActions } from '../../../actions/sessionsActions'


const SimulationSettingPage = () => {
  const {
    state: {
      simulations: { simulationSelected, error, loading },
      session: { navigation }
    },
    dispatch
  } = useStore()

  const { setActiveSection } = useSessionActions(dispatch)
  useEffect(() => {
    updateActiveSection()
  }, [])

  const updateActiveSection = () => {
    if(!navigation?.activeSection){
      simulationSelected ? setActiveSection('Settings') : setActiveSection('Create')
    }
  }
  return (
    <div>
      <SettingsForm simulation={simulationSelected} loading={loading} error={error} />
    </div>
  )
}

export default SimulationSettingPage
