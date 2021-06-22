import request from '../httpClient/api.request'

export const saveAgentsInformationService = async (agentsInformation,idConfiguration) => {
  return request(
    `${process.env.REACT_APP_AGENTS}/configuration/${idConfiguration}/age_groups`,
    'POST',
    agentsInformation
  )
}