import React from 'react'
import ListItem from '../../components/layouts/ListItem'
import { useStore } from '../../store/storeContext'
import SendIcon from '@material-ui/icons/Send'
import DraftsIcon from '@material-ui/icons/Drafts'
import InboxIcon from '@material-ui/icons/MoveToInbox'
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
    const { from } = location.state || { from: { pathname: `/simulations/${id}` } }
    history.replace(from)
  }
  const options = [
    {
      icon: () =>  <SendIcon fontSize="small"/>,
      name: 'Settings',
    },
    {
      icon: () =>   <DraftsIcon fontSize="small"/>,
      name: 'Clone'
    },
    {
      icon: () =>  <InboxIcon fontSize="small"/>,
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
