import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { getStateWithQueryparams } from '../../CompartmentalModelPage/common'
import NestingContext from '../../../context/Nesting/nestingContext'

export const useAgentsNaturalHistoryPageState = () => {
  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')

  const nestingContext = useContext(NestingContext)
  const {
    vulnerabilityGroupDiseaseStates,
    VulnerabilityGroupsInformation,
    loadVulnerabilityGroupDiseaseState,
    loadVulnerabilityGroupsInformation
  } = nestingContext

  useEffect( () => {
    const params = getStateWithQueryparams(history)    
    if( !isEmpty(params) ){
      setIdConfiguration(params.idConfiguration)
    }
  }, [ history ])

  useEffect(() => {
    if (idConfiguration) {
      loadVulnerabilityGroupsInformation(idConfiguration)
      loadVulnerabilityGroupDiseaseState(idConfiguration)
    }
  }, [idConfiguration])

  return {
    VulnerabilityGroupsInformation,
    vulnerabilityGroupDiseaseStates
  }
}