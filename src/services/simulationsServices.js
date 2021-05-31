import request from '../httpClient/api.request'

export const requestListSimulations = async () => {
  return  request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation`,
    'GET',
  ) 
}

export const requestListSimulationsFiles = async (uidSimulation) => {
  return  request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/simulation/${uidSimulation}/file`,
    'GET',
  ) 
}

export const downloadSimulationsFiles = async (uidSimulation,file_uuid) => {
  return  request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/simulation/${uidSimulation}/file/${file_uuid}`,
    'GET',
  ) 
}

export const requestDeleteSimulations = async (uidSimulation) => {
  return  request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation/${uidSimulation}`,
    'DELETE',
  ) 
}

