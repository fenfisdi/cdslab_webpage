import request from '../httpClient/api.request'

export const requestListSimulations = async () => {
  return  request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation`,
    'GET',
  ) 
}
