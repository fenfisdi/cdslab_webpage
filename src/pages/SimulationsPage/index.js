import React from 'react'
import ListItem from '../../components/layouts/ListItem'
import { useStore } from '../../store/storeContext'
import SendIcon from '@material-ui/icons/Send'
import DraftsIcon from '@material-ui/icons/Drafts'
import InboxIcon from '@material-ui/icons/MoveToInbox'

const SimulationsPage = () => {
  const { state: { simulations: { simulations, loading, error } } } = useStore()
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
    <ListItem list={simulations} optionMenu={options} />
  )
}

export default SimulationsPage
