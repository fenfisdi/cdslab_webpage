import request from '../httpClient/api.request'

export const saveMobilityGroupsInformationService = async (agentsInformation,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/mobility_groups`,
    'POST',
    agentsInformation
  )
}

export const getMobilityGroupsInformationService = async (idConfiguration)=>{
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/mobility_group`,
    'GET')
}

export const saveMobilityGroupsItemService = async (mobilityGroup,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/mobility_group`,
    'POST',
    mobilityGroup
  )
}

export const updateMobilityGroupsItemService = async (idConfiguration,idMobilityGroup,mobilityGroup) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/mobility_group/${idMobilityGroup}`,
    'PUT',
    mobilityGroup
  )
}

export const saveMobilityGroupsItemFileService = async (idConfiguration,idMobilityGroup,mobilityGroupFile) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/mobility_group/${idMobilityGroup}/file`,
    'PUT',
    mobilityGroupFile
  )
}

export const deleteMobilityGroupsItemService = async (idConfiguration,idMobilityGroup) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/mobility_group/${idMobilityGroup}`,
    'DELETE'
  )
}