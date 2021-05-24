import React, { useEffect } from 'react'
import SettingsForm from '@components/Simulations/SettingsForm'
import { useStore } from '@store/storeContext'
import { useSessionActions } from '@actions/sessionsActions'
import NavigationButtons from '@components/layouts/NavigationButtons'
import { useSimulationActions } from '@actions/simulationsActions'

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

  }, [])

  return (
    <div>
    </div>
  )
}

export default SimulationSettingPage
