import request from '../httpClient/api.request'

export const saveAgentsAgeModelInformationService = async (agentsInformation,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/age_groups`,
    'POST',
    agentsInformation
  )
}

export const getAgentsAgeModelInformationService = async (idConfiguration)=>{
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/age_groups`,
    'GET')
}