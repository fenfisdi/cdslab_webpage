import request from '../httpClient/api.request'

export const registerModelParametersService = async (userForm) => {
  return request(
    `${process.env.REACT_APP_REGISTER_API_URL}/user`,
    'POST',
    userForm
  )
}


export const getPredefinedModelsService = async () => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/model`,
    'GET')
}

export const storeCompartmentalSimulationService = async (simulation) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation`,
    'POST',
    simulation
  )
}

export const findCompartmentalSimulationService = async (idSimulation) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation/${idSimulation}`,
    'GET')
}

export const findPredefinedModelService = async (idModel) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/model/${idModel}`,
    'GET')
}