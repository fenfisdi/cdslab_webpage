import notesPixel from '../assets/images/notes_pixel_perfect.svg'
import plusPixel from '../assets/images/plus__pixel_buddha.svg'

export const COMPARTMENTAL_FIELDS = {
  SIR:{
    fields:[
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
    ],
    fieldStates:[{
      label:'State Variable 1', 
      tag:'(Units)', 
      input:{type:'text',name:'stateVariable1',label:'State Variable 1' }, 
      indetifier:'stateVariable1',
      helper:'dummy'
    },
    {
      label:'State Variable 2', 
      tag:'(People per day)',
      input:{type:'text',name:'stateVariable2',label:'State Variable 2'}, 
      indetifier:'stateVariable2',
      helper:'dummy'
    },
    {
      label:'State Variable 3', 
      tag:'(Per day)',
      input:{type:'text',name:'stateVariable3',label:'State Variable 3'},
      indetifier:'stateVariable3',
      helper:'dummy'
    }],
    stateVariables:[{label:'state1',value:'value state1'},{label:'state2',value:'value state2'},{label:'state3',value:'value state3'}]

  },
  SEIR:{
    fields:[
      {
        
        name:'influexRate',
        label:'Influex rate',  
        unit:'(People per day)', 
        input:{type:'text',name:'influexRate',label:'Influex rate' }, 
        indetifier:'influexRate',
        helper:'dummy'
      },
      {
        
        name:'naturalDeath',
        label:'Natural death rate', 
        unit:'(People per day)',
        input:{type:'text',name:'naturalDeath',label:'Natural death rate'}, 
        indetifier:'naturalDeath'
      },
      {
        
        name:'diseaseInduced',
        label:'Disease-induced death rated Death Rate', 
        unit:'(Per day)',
        input:{type:'text',name:'diseaseInduced',label:'Disease-induced death rate'},
        indetifier:'diseaseInduced'
      },
      {
        
        name:'vaccinationRate',
        label:'Vaccination ratete', 
        unit:'(Per day)',
        input:{type:'text',name:'vaccinationRate',label:'Vaccination rate'},
        indetifier:'vaccinationRate',
        helper:'dummy'
      },
      {
        
        name:'recoveryRate',
        label:'Recovery rate',
        unit:'(Per day)',
        input:{type:'text',name:'recoveryRate',label:'Recovery rate'},
        indetifier:'recoveryRate',
        helper:'dummy'
      },
      {
        
        name:'lossofImmunityRate',
        label:'Loss of immunity ratety rate', 
        unit:'(Per day)',
        input:{type:'text',name:'lossofImmunityRate',label:'Loss of immunity rate'},
        indetifier:'lossofImmunityRate',
        helper:'dummy'
      },
      {
        
        name:'reinfectionRate',
        label:'Reinfection ratete', 
        unit:'(Per day)',
        input:{type:'text',name:'reinfectionRate',label:'Reinfection rate'},
        indetifier:'reinfectionRate',
        helper:'dummy'
      },
      {
        
        name:'transmissionconstantBetweenSandE',
        label:'Transmission constant between S and Eonstant between S and E', 
        unit:'(per person,  per day)',
        input:{type:'text',name:'transmissionconstantBetweenSandE',label:'Transmission constant between S and E'},
        indetifier:'transmissionconstantBetweenSandE',
        helper:'dummy'
      },
      {
        
        name:'transmissionconstantBetweenSandI',
        label:'Transmission constant between S and Ionstant between S and I', 
        unit:'(per person,  per day)',
        input:{type:'text',name:'transmissionconstantBetweenSandI',label:'Transmission constant between S and I'},
        indetifier:'transmissionconstantBetweenSandI',
        helper:'dummy'
      }
    ],
    fieldStates:[ {
      label:'State Variable 1', 
      tag:'(Units)', 
      input:{type:'text',name:'stateVariable1',label:'State Variable 1' }, 
      indetifier:'stateVariable1',
      helper:'dummy'
    },
    {
      label:'State Variable 2', 
      tag:'(People per day)',
      input:{type:'text',name:'stateVariable2',label:'State Variable 2'}, 
      indetifier:'stateVariable2',
      helper:'dummy'
    }],
    stateVariables:[{label:'state1',value:'value state1'},{label:'state2',value:'value state2'}]
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
    ],
    fieldStates:[
      {
        label:'State Variable 3', 
        tag:'(Per day)',
        input:{type:'text',name:'stateVariable3',label:'State Variable 3'},
        indetifier:'stateVariable3',
        helper:'dummy'
      }
    ],
    stateVariables:[{label:'state3',value:'value state3'}]
  }
}


/***********CONST INDETIFIER ***** */
export const MODEL_IDENTIFIERS ={
  SIR:'SIR',
  SEIR:'SEIR',
  SEIRV:'SEIRV'
}

export const SIMULATION_IDENTIFIERS ={
  ADJUST:'ADJUST',
  FIXED:'FIXED',
  OPTIMIZE:'OPTIMIZED'
}

export const ADJUST_PARAMETERS = {
  UPLOAD_DATA:'UPLOAD_DATA',
  USE_AVAILABLE:'USE_AVAILABLE'
}

export const INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION ={
  OPTIMIZE:'optimize_parameters',
  FIXED:'fixed_parameters'
}

export const INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION ={
  UPLOAD:'UPLOAD DATA',
  USEAVAILABLE:'USE AVAILABLE DATA'
}


/********* CONST OPTIONS ***** */
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

export const OPTIONS_COMPARTMENTAL_MAIN = [
  {
    titleIcon:plusPixel,  
    name: 'New simulation',
    indetifier: 'new_simulation',
    url: 'compartmentalModels/newSimulations',
  },
  {
    titleIcon:notesPixel,
    name: 'My simulations',
    indetifier: 'my_simulations',
    url: 'compartmentalModels/mySimulations'
  }
]

export const OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION = [
  {
      
    name: 'Optimize parameters',
    indetifier: INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION.OPTIMIZE,
    url: ''
  },
  {
    
    name: 'Fixed parameters',
    indetifier: INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION.FIXED,
    url: ''
  }
]


export const OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION = [
  {
      
    name: 'Upload data',
    indetifier: INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.UPLOAD,
    url: ''
  },
  {
    
    name: 'Use available data (INS)',
    indetifier: INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.USEAVAILABLE,
    url: ''
  }
]