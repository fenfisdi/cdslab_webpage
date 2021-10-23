import request from '../httpClient/api.request'

export const getListAgentsReviewInfoService = async (idConfiguration) => {
  return  request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/summary`,
    'GET',
  ) 
}


