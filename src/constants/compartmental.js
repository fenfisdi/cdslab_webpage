export const COMPARTMENTAL_FIELDS = {
  SIR:{
    fields:[
      {
        label:'Influex Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate' 
      },
      {
        label:'Natural Death Rate', 
        tag:'(People per day)',
        input:{type:'text',name:'naturalDeath',label:'Natural death rate'}, 
        indetifier:'naturalDeath'
      },
      {
        label:'Disease-Induced Death Rate', 
        tag:'(Per day)',
        input:{type:'text',name:'diseaseInduced',label:'Disease-induced death rate'},
        indetifier:'diseaseInduced'
      },
      {
        label:'Transmission rate', 
        tag:'(Per day)',
        input:{type:'text',name:'transmissionRate',label:'Transmission rate'},
        indetifier:'transmissionRate'
      },
      {
        label:'Vaccination rate', 
        tag:'(Per day)',
        input:{type:'text',name:'vaccinationRate',label:'Vaccination rate'},
        indetifier:'vaccinationRate'
      },
      {
        label:'Recovery rate', 
        tag:'(Per day)',
        input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
        indetifier:'recoveryRate'
      },
      {
        label:'Reinfection rate', 
        tag:'(Per day)',
        input:{type:'text',name:'reinfectionRate',label:'Reinfection rate'},
        indetifier:'reinfectionRate'
      },
      {
        label:'Loss of immunity rate', 
        tag:'(Per day)',
        input:{type:'text',name:'lossofImmunityRate',label:'Loss of immunity rate'},
        indetifier:'lossofImmunityRate'
      }
    ]
  },
  SEIR:{
    fields:[
      {
        label:'Influex Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate' 
      },
      {
        label:'Natural Death Rate', 
        tag:'(People per day)',
        input:{type:'text',name:'naturalDeath',label:'Natural death rate'}, 
        indetifier:'naturalDeath'
      },
      {
        label:'Disease-Induced Death Rate', 
        tag:'(Per day)',
        input:{type:'text',name:'diseaseInduced',label:'Disease-induced death rate'},
        indetifier:'diseaseInduced'
      }
    ]
  },
  SEIRV:{
    fields:[
      {
        label:'Influex Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate' 
      }
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