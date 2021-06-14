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

export const getInsParametersDatesService = async (region) => {
  return  {
    'initialDate':'Mon Jun 14 2021 10:50:00 GMT-0500',
    'finalDate':'Sun Jun 20 2021 10:50:00 GMT-0500'
  }
}

export const getInformationInsService = async (data) => {
  return {
    headers:[
      {
        label:'Variable Ins a',name:'varinsa'
      },
      {
        label:'Variable Ins b',name:'varinsb'
      }
    ],
    body:[
      {
        varinsa:'Valor de ins a fila 1',
        varinsb:'Valor de ins b fila 1'
      },
      {
        varinsa:'Valor de ins a fila 2',
        varinsb:'Valor de ins b fila 2'
      }
    ]
  }
}