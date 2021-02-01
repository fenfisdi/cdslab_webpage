import React, { useEffect } from 'react'
import SettingsForm from '../../../components/Simulations/SettingsForm'
import { useStore } from '../../../store/storeContext'
import { useSessionActions } from '../../../actions/sessionsActions'
import NavigationButtons from '../../../components/layouts/NavigationButtons'


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
  const fillNavigationButtons = () => {
    const main = { path: '/simulations', name: 'Back to Simulations' }
    const forward = { path: '/simulations', name: 'Infection and Diseases' }
    return <NavigationButtons main={main} forward={forward} />
  }

  return (
    <div>
      <SettingsForm simulation={simulationSelected} loading={loading} error={error} />
      {fillNavigationButtons()}
    </div>
  )
}

export default SimulationSettingPage
