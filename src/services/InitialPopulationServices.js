import request from '../httpClient/api.request'
export const getListAllowedVariablesService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/population/variables`,
    'GET',
  ) 
}
