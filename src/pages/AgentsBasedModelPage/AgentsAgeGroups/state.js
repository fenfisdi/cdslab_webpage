import { useHistory, useRouteMatch } from 'react-router'

export const useAgentsAgeGroups = () => {
  const history = useHistory()
  const match = useRouteMatch()

  const redirectToMobilityGroupsPage = () => {
    history.push(`${match.path}/agentsMobilityGroups`)
  }

  return [
    redirectToMobilityGroupsPage
  ]
}
