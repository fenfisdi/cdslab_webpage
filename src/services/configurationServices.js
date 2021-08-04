import request from '../httpClient/api.request'

export const requestListConfiguration = async () => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration`,
    'GET',
  ) 
}

export const getConfigurationService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}`,
    'GET',
  ) 
}

export const requestAddConfiguration = async (configurationForm) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration`,
    'POST',
    configurationForm
  )
}

export const requestListConfigurationDistance = async () => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/units/distance`,
    'GET',
  ) 
}

export const requestListConfigurationTime = async () => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/units/time`,
    'GET',
  ) 
}



