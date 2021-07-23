import request from '../httpClient/api.request'
export const getQuarantineGroupsService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}`,
    'GET',
  ) 
}

export const saveQuarantineGroups = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/quarantine`,
    'GET',
  ) 
}