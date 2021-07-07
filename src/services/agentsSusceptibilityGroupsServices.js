import request from '../httpClient/api.request'

export const saveSusceptibilityGroupsInformationService = async (agentsInformation,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/susceptibility_groups`,
    'POST',
    agentsInformation
  )
}

export const getSusceptibilityGroupsInformationService = async (idConfiguration)=>{
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/susceptibility_groups`,
    'GET')
}