import { useHistory, useRouteMatch } from 'react-router'

export const useAgentSusceptibilityGroups = () => {
  const history = useHistory()
  const match = useRouteMatch()

  const handleDeleteItem = () => {

  }

  const handleCheckItem = () => {
    
  }

  const handleConfigItem = () => {
    
  }

  const handleAddItem = () => {
    
  }

  const redirectToInmunizationGroupNamePage = () => {
    history.push(`${match.path}/agentsInmunizationGroupName`)
  }
  
  return [
    handleDeleteItem,
    handleCheckItem,
    handleConfigItem,
    handleAddItem,
    redirectToInmunizationGroupNamePage
  ]
}
