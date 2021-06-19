import { useHistory } from 'react-router'

export const useAgentsAgeGroups = () => {
  const history = useHistory()
  
  
  const redirectToMobilityGroupsPage = () => {
    history.push({
      pathname: 'agentsMobilityGroups'
    })
  }

  return {
    redirectToMobilityGroupsPage
  }
    
  
}
