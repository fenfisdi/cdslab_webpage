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

export const getFixedParametersFormFieldsService = async () => {
  return [
    {
      label:'Influex Rate', 
      name:'influexRate',
      unit:'(People per day)', 
      input:{type:'text',name:'influexRate',label:'Influex rate' }, 
      indetifier:'influexRate',
      helper:'dummy'
    },
    {
      label:'Natural Death Rate', 
      name:'naturalDeath',
      unit:'(People per day)',
      input:{type:'text',name:'naturalDeath',label:'Natural death rate'}, 
      indetifier:'naturalDeath',
      helper:'dummy'
    },
    {
      label:'Disease-Induced Death Rate', 
      name:'diseaseInduced',
      unit:'(Per day)',
      input:{type:'text',name:'diseaseInduced',label:'Disease-induced death rate'},
      indetifier:'diseaseInduced',
      helper:'dummy'
    },
    {
      label:'Transmission rate', 
      name:'transmissionRate',
      unit:'(Per day)',
      input:{type:'text',name:'transmissionRate',label:'Transmission rate'},
      indetifier:'transmissionRate',
      helper:'dummy'
    },
    {
      label:'Vaccination rate', 
      name:'vaccinationRate',
      unit:'(Per day)',
      input:{type:'text',name:'vaccinationRate',label:'Vaccination rate'},
      indetifier:'vaccinationRate',
      helper:'dummy'
    },
    {
      label:'Recovery rate', 
      name:'recoveryRate',
      unit:'(Per day)',
      input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
      indetifier:'recoveryRate',
      helper:'dummy'
    },
    {
      label:'Reinfection rate', 
      name:'reinfectionRate',
      unit:'(Per day)',
      input:{type:'text',name:'reinfectionRate',label:'Reinfection rate'},
      indetifier:'reinfectionRate',
      helper:'dummy'
    },
    {
      label:'Loss of immunity rate', 
      name:'lossofImmunityRate',
      unit:'(Per day)',
      input:{type:'text',name:'lossofImmunityRate',label:'Loss of immunity rate'},
      indetifier:'lossofImmunityRate',
      helper:'dummy'
    }
  ]
}

export const executeSimulationService = async (idSimulation) => {
  return request(
    `${process.env.REACT_APP_COMPARTMENTAL_MODEL}/simulation/${idSimulation}/execute`,
    'POST'
  )
}