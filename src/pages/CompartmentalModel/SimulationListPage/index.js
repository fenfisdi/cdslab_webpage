import React, { useEffect } from 'react'
import ListItem from '@components/layouts/ListItem'
import { useStore } from '@store/storeContext'
import Icon from '@material-ui/core/Icon'
import { Button } from '@material-ui/core'
import { SimulationContainer } from './styles'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSimulationActions } from '@actions/simulationsActions'
import { useSessionActions } from '@actions/sessionsActions'


const SimulationListPage = () => {
  const {
    state: {
      simulations: { simulations, loading },
      session: { navigation }
    },
    dispatch
  } = useStore()
  const { getSimulations, setActiveSimulation } = useSimulationActions(dispatch)
  const { setCurrenNavigation } = useSessionActions(dispatch)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    console.log(navigation)
    updateNavigationTitle()
    loadData()
  }, [])

  const options = [
    {
      icon: 'send',
      name: 'Settings'
    },
    {
      icon: 'drafts',
      name: 'Clone'
    },
    {
      icon: 'inbox',
      name: 'Delete'
    }

  ]

  const loadData = () => {
    if (simulations.length === 0 && !loading) { getSimulations() }
  }

  const updateNavigationTitle = () => {
    if (!navigation?.current) { setCurrenNavigation('Simulations') }
  }

  const redirectSettings = (id) => {
    const simulation = simulations.find(s => s._id === id)
    setActiveSimulation(simulation)
    const { from } = location.state || { from: { pathname: `/simulations/${id}/settings` } }
    history.replace(from)
  }

  return (
    <SimulationContainer>
      <ListItem list={simulations} optionMenu={options} handleClick={redirectSettings} />
      <Link to='simulations/add'>
        <Button
          variant='contained'
          color='primary'
          endIcon={<Icon>add_circle</Icon>}
        >
          Add New Simulation
        </Button>
      </Link>
    </SimulationContainer>

  )
}

export default SimulationListPage
