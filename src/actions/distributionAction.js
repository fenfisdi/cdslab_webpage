import {
  DISTRIBUTION_SET_LIST,
  DISTRIBUTION_PARAMETERS_SET_LIST,
  DISTRIBUTION_LOADING,
  DISTRIBUTION_ERROR,
} from './types/distributionTypes'
import { 
  requestListDistribution,
  requestListParemters, 
} from '../services/distributionService'

export const useDistributionActions = (dispatch) => {


  const getListDistribution= async () => {
    dispatch({ type: DISTRIBUTION_LOADING })
    requestListDistribution()
      .then(({data}) => {
        dispatch({ type: DISTRIBUTION_SET_LIST, payload: data.data })
      })
      .catch((error) => {
        const { response: { data } } = error
        errorSimulation(data)
      })
  }

  const getListParameters = async (name) => {
    requestListParemters(name).then((response)=>{      
      dispatch({ type: DISTRIBUTION_PARAMETERS_SET_LIST, payload: response.data.data })
    }) .catch((error) => {
      const { response: { data } } = error
      errorSimulation(data)
    }) 
  }

  const getParametersOptions = async (distributionList=[]) => {
    const parametersWhitOptions = {}
    const parametersOptionsList = new Promise((resolve,reject) => {
      distributionList.forEach(async(distribution, index, array) => {         
        const response = await requestListParemters(distribution).catch(()=>{
          reject({})
        })         
        parametersWhitOptions[distribution] = response.data.data
        if (index === array.length -1) resolve(parametersWhitOptions)      
      })
    })
    return parametersOptionsList  
  }

  const errorSimulation = (data) =>{
    dispatch({
      type: DISTRIBUTION_ERROR,
      payload: data
    })
  }
  
  return { 
    getListDistribution, 
    getListParameters,
    getParametersOptions
  }
}
