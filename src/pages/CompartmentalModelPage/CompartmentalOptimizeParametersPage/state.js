import { INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'

export const useCompartmentalOptimizeParametersPageState = () => {

  const executeSelectedOption =(option)=>{
    const {indetifier}=option
    if(indetifier == INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.UPLOAD){
      console.log(':::::::::cargue upload form',option)
    }
  }

  return {
    executeSelectedOption
  }
}