import request from '../httpClient/api.request'
export const getQuarantineGroupsService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/quarantine_group`,
    'GET',
  ) 
}

export const getQuarantineInformationService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/quarantine`,
    'GET',
  ) 
}

export const putQuarantineInformationService = async (idConfiguration,data) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/quarantine`,
    'PUT',
    data
  ) 
}

export const saveQuarantineGroups = async (data,idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/quarantine`,
    'POST',
    data
  ) 
}