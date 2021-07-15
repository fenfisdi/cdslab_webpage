import request from '../httpClient/api.request'

export const saveDiseaseStateGroupsInformationService = async (agentsInformation,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/disease_states`,
    'POST',
    agentsInformation
  )
}

export const getDiseaseStateGroupsInformationService = async (idConfiguration)=>{
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/disease_state`,
    'GET')
}

export const getDiseaseStateGroupsDistributionsService = async ()=>{
  return request(
    `${process.env.REACT_APP_AGENTS}/distributions/disease_state`,
    'GET')
}

export const saveDiseaseStateGroupsItemService = async (diseaseStateGroup,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/disease_state`,
    'POST',
    diseaseStateGroup
  )
}

export const saveDiseaseStateGroupsItemFileService = async (idConfiguration,idSusceptibilityGroup,diseaseStateGroup) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/disease_state/${idSusceptibilityGroup}/file`,
    'PUT',
    diseaseStateGroup
  )
}

export const updateDiseaseStateGroupsItemService = async (idConfiguration,idDiseaseStateGroup,diseaseStateGroup) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/disease_state/${idDiseaseStateGroup}`,
    'PUT',
    diseaseStateGroup
  )
}

export const deleteDiseaseStateGroupsItemService = async (idConfiguration,idDiseaseStateGroup) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/disease_state/${idDiseaseStateGroup}`,
    'DELETE'
  )
}