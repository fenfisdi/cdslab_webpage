import request from '../httpClient/api.request'
export const getListAllowedVariablesService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/population/variables`,
    'GET',
  ) 
}

export const getListAllowedGroupsService = async (idConfiguration,variables='') => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/population/group${variables}`,
    'GET'
  ) 
}

export const getListAllowedValuesService = async (idConfiguration,value='') => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/population/value?variable=${value}`,
    'GET',
  ) 
}

export const postPopulationService = async (idConfiguration,value) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/population`,
    'PUT',
    value
  ) 
}


export const getPopulationService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/population/configured`,
    'GET'
  ) 
}