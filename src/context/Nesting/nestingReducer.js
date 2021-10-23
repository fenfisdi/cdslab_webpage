import * as Types from '../types'

export default (state, { type, payload }) => {
  switch (type) {
  case Types.LOAD_VULNERABILITY_GROUP_DISEASE_STATE_DATA:
    return {
      ...state,
      vulnerabilityGroupDiseaseStates: payload
    }

  case Types.LOAD_AGENTS_VULNERABILITY_GROUPS_MODEL_INFORMATION:
    return {
      ...state,
      VulnerabilityGroupsInformation: payload
    }

  case Types.LOAD_VULNERABILITY_DISTANCE_UNITS:
    return {
      ...state,
      VulnerabilityDistanceUnits: payload
    }

  default:
    return state
  }
}