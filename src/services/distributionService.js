import request from '../httpClient/api.request'

export const requestListDistribution = async () => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/distributions`,
    'GET',
  ) 
}

export const requestListParemters = async (name) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/distributions/${name}/parameters`,
    'GET',
  ) 
}


