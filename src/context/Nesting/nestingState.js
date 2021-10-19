import React, { useReducer } from 'react'
import { getVulnerabilityGroupsInformationService, getVulnerabilityGroupsStates, getVulnerabilityUnitDistance } from '../../services/agentsVulnerabilityGroupsServices'
import * as Types from '../types'
import NestingContext from './nestingContext'
import NestingReducer from './nestingReducer'

const NestingState = (props) => {
  const initialState = {
    vulnerabilityGroupDiseaseStates: [],
    VulnerabilityGroupsInformation: [],
    VulnerabilityDistanceUnits: []
  }

  const [state, dispatch] = useReducer(NestingReducer, initialState)

  const loadVulnerabilityGroupDiseaseState = ( id ) => {
    getVulnerabilityGroupsStates( id )
      .then((response) => {
        dispatch({
          type: Types.LOAD_VULNERABILITY_GROUP_DISEASE_STATE_DATA,
          payload: response.data.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const loadVulnerabilityGroupsInformation =( id )=>{
    getVulnerabilityGroupsInformationService( id )
      .then((response)=>{       
        dispatch({
          type: Types.LOAD_AGENTS_VULNERABILITY_GROUPS_MODEL_INFORMATION,
          payload: response.data.data
        })
      })
  }

  const loadVulnerabilityUnitDistance = () => {
    getVulnerabilityUnitDistance()
      .then((response)=>{       
        dispatch({
          type: Types.LOAD_VULNERABILITY_DISTANCE_UNITS,
          payload: response.data.data
        })
      })
  }

  return (
    <NestingContext.Provider
      value={{
        vulnerabilityGroupDiseaseStates: state.vulnerabilityGroupDiseaseStates,
        VulnerabilityGroupsInformation: state.VulnerabilityGroupsInformation,
        VulnerabilityDistanceUnits: state.VulnerabilityDistanceUnits,
        loadVulnerabilityUnitDistance,
        loadVulnerabilityGroupDiseaseState,
        loadVulnerabilityGroupsInformation
      }}
    >
      {props.children}
    </NestingContext.Provider>
  )
}

export default NestingState