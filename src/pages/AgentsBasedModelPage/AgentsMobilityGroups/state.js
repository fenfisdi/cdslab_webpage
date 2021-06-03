import { useHistory, useRouteMatch } from 'react-router'

export const useAgentsMobilityGroups = () => {
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

  const redirectToSusceptibilityGroupsPage = () => {
    history.push(`${match.path}/agentSusceptibilityGroups`)
  }
  
  return [
    handleDeleteItem,
    handleCheckItem,
    handleConfigItem,
    handleAddItem,
    redirectToSusceptibilityGroupsPage
  ]
}
