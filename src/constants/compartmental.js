export const simulationFields = {
  'SIR':{
    fields:[
      {type:'text',label:'Influex rate', tag:'(People per day)'},
      {type:'text',label:'Influex rate', tag:'(People per day)'}
    ]
  }
}

export const MODEL_IDENTIFIERS ={
  SIR:'SIR',
  SEIR:'SEIR',
  SEIRV:'SEIRV'
}


export const SIMULATION_IDENTIFIERS ={
  ADJUST:'ADJUST',
  FIXED:'FIXED',
}

export const ADJUST_PARAMETERS = {
  UPLOAD_DATA:'UPLOAD_DATA',
  USE_AVAILABLE:'USE_AVAILABLE'
}

export const OPTIONS_PREDEFINED_MODELS = [
  {name:'SIR',indetifier:MODEL_IDENTIFIERS.SIR},
  {name:'SEIR',indetifier:MODEL_IDENTIFIERS.SEIR},
  {name:'SEIRV',indetifier:MODEL_IDENTIFIERS.SEIRV}]


export const OPTIONS_SIMULATION_TYPE = [
  {name:'Adjust parameters',indetifier:SIMULATION_IDENTIFIERS.ADJUST},
  {name:'Fixed parameters',indetifier:SIMULATION_IDENTIFIERS.FIXED}]

export const OPTIONS_ADJUST_PARAMETERS = [
  {name:'Upload Data',indetifier:ADJUST_PARAMETERS.UPLOAD_DATA},
  {name:'Use Available data (INS)',indetifier:ADJUST_PARAMETERS.USE_AVAILABLE}]