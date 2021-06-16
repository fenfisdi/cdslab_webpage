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

export const storeCompartmentalSimulationFolderService = async (idSimulation) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/folder/simulation?uuid=${idSimulation}`,
    'POST',
  )
}


export const storeCompartmentalFileUploadService = async (idSimulation,file) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/simulation/${idSimulation}/file`,
    'POST',
    file,
    {headers: { 'Content-Type': 'multipart/form-data' }} 
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

export const updateCompartmentalSimulationService = async (simulation,idSimulation) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation/${idSimulation}`,
    'PUT',
    simulation
  )
}

export const executeSimulationService = async (idSimulation) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation/${idSimulation}/execute`,
    'POST'
  )
}

export const getInsParametersVariablesService = async () => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/ins/variables`,
    'GET')
}

export const getInsParametersRegionsService = async () => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/scrapping/regions`,
    'GET')
}

export const getInsParametersDatesService = async (hash) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/scrapping/dates?file_id=${hash}`,
    'GET')
}

export const getInformationInsService = async (hash,initialDate,finalDate) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/scrapping/Data?file_id=${hash}&init_date=${initialDate}&final_date=${finalDate}`,
    'GET')
  
}

export const postInformationInsService = async (initialDate,finalDate,identifier,regionName,variable)=>{
  
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_FILE}/scrapping/simulation/${identifier}`,
    'POST',{
      uuid:identifier,
      init_date:initialDate,
      final_date:finalDate,
      region_name:regionName,
      variable:variable
    }) 
 

}