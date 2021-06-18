import { useHistory } from 'react-router'

export const useAgentSusceptibilityGroups = () => {
  const history = useHistory()
  
  const handleDeleteItem = () => {

  }

  const handleCheckItem = () => {
    
  }

  const handleConfigItem = () => {
    
  }

  const handleAddItem = () => {
    
  }

  const redirectToInmunizationGroupNamePage = () => {
    
    history.push({
      pathname: 'agentsInmunizationGroupName'
    })
  }
  
  return {
    handleDeleteItem,
    handleCheckItem,
    handleConfigItem,
    handleAddItem,
    redirectToInmunizationGroupNamePage
  }
    
  
}
