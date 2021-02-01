import React, { useEffect } from 'react'
import SettingsForm from '../../../components/Simulations/SettingsForm'
import { useStore } from '../../../store/storeContext'
import { useSessionActions } from '../../../actions/sessionsActions'
import NavigationButtons from '../../../components/layouts/NavigationButtons'
import { useSimulationActions } from '../../../actions/simulationsActions'


const SimulationSettingPage = () => {
  const {
    state: {
      simulations: { simulationSelected, error, loading },
      session: { navigation }
    },
    dispatch
  } = useStore()

  const { setActiveSection, setCurrenNavigation } = useSessionActions(dispatch)
  const { setActiveSimulation } = useSimulationActions(dispatch)
  useEffect(() => {
    updateActiveSection()
  }, [])

  const updateActiveSection = () => {
    if(!navigation?.activeSection){
      simulationSelected ? setActiveSection('Settings') : setActiveSection('Create')
    }
  }
  const navigationMainHandleClick = () => {
    setActiveSection(null)
    setCurrenNavigation('Simulations')
    setActiveSimulation(null)
  }

  const fillNavigationButtons = () => {
    const main = { path: '/simulations', name: 'Back to Simulations', handleClick: navigationMainHandleClick }
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
