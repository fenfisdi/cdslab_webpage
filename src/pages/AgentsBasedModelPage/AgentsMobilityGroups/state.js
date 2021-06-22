import { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'

export const useAgentsMobilityGroups = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const [mobility, setmobility] = useState([])
  const [weight, setWeight] = useState({
    bandwidth: '',
    algorithm: '',
    kernel: '',
    metric: '',
    atol: '',
    rtol: '',
    breadthFirst: '',
    leafSize: '',
    metricParams: ''
  })
  const [numpy, setNumpy] = useState({
    parameter: ''
  })
  const [empirical, setEmpirical] = useState({
    bandwidth: '',
    algorithm: '',
    kernel: '',
    metric: '',
    atol: '',
    rtol: '',
    breadthFirst: '',
    leafSize: '',
    metricParams: ''
  })
  const mobilityArray = []

  const handleDeleteItem = (index) => {
    mobilityArray.splice(1, index)
  }

  const handleCheckItem = () => {
    
  }

  const handleConfigItem = () => {
    //open modal
     
  }


  const handleAddItem = () => {
    mobilityArray.push({
      name: '',
      id: '',
      distributionType: '',
      constant: '',
      weight: weight,
      numpy: numpy,
      empirical: empirical
    })
  }

  const redirectToSusceptibilityGroupsPage = () => {
    
    history.push({
      pathname: 'agentSusceptibilityGroups'
    })
  }
  
  return {
    handleDeleteItem,
    handleCheckItem,
    handleConfigItem,
    handleAddItem,
    redirectToSusceptibilityGroupsPage}
  
}
