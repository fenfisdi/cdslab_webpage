import React from 'react'
import ListItem from '../../../components/layouts/ListItem'
import { useStore } from '../../../store/storeContext'
import Icon from '@material-ui/core/Icon';
import { Button } from '@material-ui/core'
import { SimulationContainer } from './styles'
import { useHistory, useLocation } from 'react-router-dom'

const SimulationListPage = () => {
  const { state: { simulations: { simulations, loading, error } } } = useStore()
  const history = useHistory()
  const location = useLocation()

console.log(simulations)

  const redirectSettings = (id) => {
    const { from } = location.state || { from: { pathname: `/simulations/${id}/settings` } }
    history.replace(from)
  }
  const options = [
    {
      icon: 'send',
      name: 'Settings',
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
  return (
    <SimulationContainer>
      <ListItem list={simulations} optionMenu={options} handleClick={redirectSettings}/>
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>add_circle</Icon>}
      >
        Add New Simulation
      </Button>
    </SimulationContainer>
  )
}

export default SimulationListPage
