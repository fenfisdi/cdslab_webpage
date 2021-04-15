export const COMPARTMENTAL_FIELDS = {
  SIR:{
    fields:[
      {
        label:'Influex Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate',
        helper:'dummy'
      },
      {
        label:'Natural Death Rate', 
        tag:'(People per day)',
        input:{type:'text',name:'naturalDeath',label:'Natural death rate'}, 
        indetifier:'naturalDeath',
        helper:'dummy'
      },
      {
        label:'Disease-Induced Death Rate', 
        tag:'(Per day)',
        input:{type:'text',name:'diseaseInduced',label:'Disease-induced death rate'},
        indetifier:'diseaseInduced',
        helper:'dummy'
      },
      {
        label:'Transmission rate', 
        tag:'(Per day)',
        input:{type:'text',name:'transmissionRate',label:'Transmission rate'},
        indetifier:'transmissionRate',
        helper:'dummy'
      },
      {
        label:'Vaccination rate', 
        tag:'(Per day)',
        input:{type:'text',name:'vaccinationRate',label:'Vaccination rate'},
        indetifier:'vaccinationRate',
        helper:'dummy'
      },
      {
        label:'Recovery rate', 
        tag:'(Per day)',
        input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
        indetifier:'recoveryRate',
        helper:'dummy'
      },
      {
        label:'Reinfection rate', 
        tag:'(Per day)',
        input:{type:'text',name:'reinfectionRate',label:'Reinfection rate'},
        indetifier:'reinfectionRate',
        helper:'dummy'
      },
      {
        label:'Loss of immunity rate', 
        tag:'(Per day)',
        input:{type:'text',name:'lossofImmunityRate',label:'Loss of immunity rate'},
        indetifier:'lossofImmunityRate',
        helper:'dummy'
      }
    ]
  },
  SEIR:{
    fields:[
      {
        label:'Influex Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate',
        helper:'dummy'
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
        label:'Vaccination rate', 
        tag:'(Per day)',
        input:{type:'text',name:'vaccinationRate',label:'Vaccination rate'},
        indetifier:'vaccinationRate',
        helper:'dummy'
      },
      {
        label:'Recovery rate', 
        tag:'(Per day)',
        input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
        indetifier:'recoveryRate',
        helper:'dummy'
      },
      {
        label:'Loss of immunity rate', 
        tag:'(Per day)',
        input:{type:'text',name:'lossofImmunityRate',label:'Loss of immunity rate'},
        indetifier:'lossofImmunityRate',
        helper:'dummy'
      },
      {
        label:'Reinfection rate', 
        tag:'(Per day)',
        input:{type:'text',name:'reinfectionRate',label:'Reinfection rate'},
        indetifier:'reinfectionRate',
        helper:'dummy'
      },
      {
        label:'Transmission constant between S and E', 
        tag:'(per person,  per day)',
        input:{type:'text',name:'transmissionconstantBetweenSandE',label:'Transmission constant between S and E'},
        indetifier:'transmissionconstantBetweenSandE',
        helper:'dummy'
      },
      {
        label:'Transmission constant between S and I', 
        tag:'(per person,  per day)',
        input:{type:'text',name:'transmissionconstantBetweenSandI',label:'Transmission constant between S and I'},
        indetifier:'transmissionconstantBetweenSandI',
        helper:'dummy'
      }
    ]
  },
  SEIRV:{
    fields:[
      {
        label:'Birth Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'birthrate',label:'Birth Rate' }, 
        indetifier:'birthrate',
        helper:'dummy'
      },
      {
        label:'Natural Death Rate', 
        tag:'(People per day)',
        input:{type:'text',name:'naturalDeath',label:'Natural death rate'}, 
        indetifier:'naturalDeath'
      },
      
      {
        label:'Incubation period', 
        tag:'(Per day)',
        input:{type:'text',name:'incubationperiod',label:'Incubation period'},
        indetifier:'incubationperiod',
        helper:'dummy'
      },
      {
        label:'Disease-Induced Death Rate', 
        tag:'(Per day)',
        input:{type:'text',name:'diseaseInduced',label:'Disease-induced death rate'},
        indetifier:'diseaseInduced'
      },
      {
        label:'Recovery rate', 
        tag:'(Per day)',
        input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
        indetifier:'recoveryRate',
        helper:'dummy'
      },
      {
        label:'Virus shedding rate by exposed people:', 
        tag:'(Per day)',
        input:{type:'text',name:'virussheddingratebyexposedpeople',label:'Virus shedding rate by exposed people:'},
        indetifier:'virussheddingratebyexposedpeople',
        helper:'dummy'
      },
      {
        label:'Virus shedding rate by infected people', 
        tag:'(Per day)',
        input:{type:'text',name:'virussheddingratebyinfectedpeople',label:'Virus shedding rate by infected people'},
        indetifier:'virussheddingratebyinfectedpeople',
        helper:'dummy'
      },
      {
        label:'Removal rate of virus', 
        tag:'(Per day)',
        input:{type:'text',name:'removalrateofvirus',label:'Removal rate of virus'},
        indetifier:'removalrateofvirus',
        helper:'dummy'
      },
      {
        label:'Transmission constant between S and E', 
        tag:'(per person,  per day)',
        input:{type:'text',name:'transmissionconstantbetweenSandE',label:'Transmission constant between S and E'},
        indetifier:'transmissionconstantbetweenSandE',
        helper:'dummy'
      },
      {
        label:'Transmission constant between S and I', 
        tag:'(per person,  per day)',
        input:{type:'text',name:'transmissionconstantbetweenSandI',label:'Transmission constant between S and I'},
        indetifier:'transmissionconstantbetweenSandI',
        helper:'dummy'
      },
      {
        label:'Transmission constant between S and V', 
        tag:'(per person,  per day)',
        input:{type:'text',name:'transmissionconstantbetweenSandV',label:'Transmission constant between S and V'},
        indetifier:'transmissionconstantbetweenSandV',
        helper:'dummy'
      },
      {
        label:'Transmission adjustment coefficient', 
        tag:'(per person)',
        input:{type:'text',name:'transmissionadjustmentcoefficient',label:'Transmission adjustment coefficient'},
        indetifier:'transmissionadjustmentcoefficient',
        helper:'dummy'
      }
    ]
  }
}

export const COMPARTMENTAL_FIELDS_STATE = {
  SIR:{
    fields:[
      {
        label:'Influex Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate',
        helper:'dummy'
      },
      {
        label:'Natural Death Rate', 
        tag:'(People per day)',
        input:{type:'text',name:'naturalDeath',label:'Natural death rate'}, 
        indetifier:'naturalDeath',
        helper:'dummy'
      },
      {
        label:'Disease-Induced Death Rate', 
        tag:'(Per day)',
        input:{type:'text',name:'diseaseInduced',label:'Disease-induced death rate'},
        indetifier:'diseaseInduced',
        helper:'dummy'
      },
      {
        label:'Transmission rate', 
        tag:'(Per day)',
        input:{type:'text',name:'transmissionRate',label:'Transmission rate'},
        indetifier:'transmissionRate',
        helper:'dummy'
      },
      {
        label:'Vaccination rate', 
        tag:'(Per day)',
        input:{type:'text',name:'vaccinationRate',label:'Vaccination rate'},
        indetifier:'vaccinationRate',
        helper:'dummy'
      },
      {
        label:'Recovery rate', 
        tag:'(Per day)',
        input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
        indetifier:'recoveryRate',
        helper:'dummy'
      },
      {
        label:'Reinfection rate', 
        tag:'(Per day)',
        input:{type:'text',name:'reinfectionRate',label:'Reinfection rate'},
        indetifier:'reinfectionRate',
        helper:'dummy'
      },
      {
        label:'Loss of immunity rate', 
        tag:'(Per day)',
        input:{type:'text',name:'lossofImmunityRate',label:'Loss of immunity rate'},
        indetifier:'lossofImmunityRate',
        helper:'dummy'
      }
    ]
  },
  SEIR:{
    fields:[
      {
        label:'Influex Rate', 
        tag:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate',
        helper:'dummy'
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
        label:'Vaccination rate', 
        tag:'(Per day)',
        input:{type:'text',name:'vaccinationRate',label:'Vaccination rate'},
        indetifier:'vaccinationRate',
        helper:'dummy'
      },
      {
        label:'Recovery rate', 
        tag:'(Per day)',
        input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
        indetifier:'recoveryRate',
        helper:'dummy'
      },
      {
        label:'Loss of immunity rate', 
        tag:'(Per day)',
        input:{type:'text',name:'lossofImmunityRate',label:'Loss of immunity rate'},
        indetifier:'lossofImmunityRate',
        helper:'dummy'
      },
      {
        label:'Reinfection rate', 
        tag:'(Per day)',
        input:{type:'text',name:'reinfectionRate',label:'Reinfection rate'},
        indetifier:'reinfectionRate',
        helper:'dummy'
      },
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