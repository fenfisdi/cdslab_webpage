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
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/mobility_groups`,
    'GET')
}