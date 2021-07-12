import request from '../httpClient/api.request'

export const saveSusceptibilityGroupsInformationService = async (agentsInformation,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/susceptibility_group`,
    'POST',
    agentsInformation
  )
}

export const getSusceptibilityGroupsInformationService = async (idConfiguration)=>{
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/susceptibility_group`,
    'GET')
}

export const saveSusceptibilityGroupsItemService = async (susceptibilityGroup,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/susceptibility_group`,
    'POST',
    susceptibilityGroup
  )
}

export const saveSusceptibilityGroupsItemFileService = async (idConfiguration,idSusceptibilityGroup,susceptibilityGroup) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/susceptibility_group/${idSusceptibilityGroup}/file`,
    'PUT',
    susceptibilityGroup
  )
}

export const deleteSusceptibilityGroupsItemService = async (idConfiguration,idSusceptibilityGroup) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/susceptibility_group/${idSusceptibilityGroup}`,
    'DELETE'
  )
}