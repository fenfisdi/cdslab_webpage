import moment from 'moment'

export const useComparmentalMySimulationFilter = () => {

  function filterSimulationName(elemento,object) {
    return elemento.name.toLowerCase().indexOf(object.search.toLowerCase()) !== -1
  }

  function filterModelType(elemento,object) {
    if(elemento.parameter_type){
      return elemento.model_name.toLowerCase().trim() === object.modelType.toLowerCase().trim()        
    }else{
      return false
    }
  }

  function filterParameterType(elemento,object) {
    if(elemento.parameter_type){
      return elemento.parameter_type.toLowerCase().trim() === object.parameterType.toLowerCase().trim()       
    }else{
      return false
    }
  }

  function filterDateDay(elemento,object) {
    var day = moment(elemento.inserted_at).format('DD')
    return Number(day) === Number(object.day)
  }

  function filterDateMonth(elemento,object) {
    var month = moment(elemento.inserted_at).format('MM')
    return Number(month) === Number(object.month)
  }
  
  function filterDateYear(elemento,object) {
    var year = moment(elemento.inserted_at).format('YYYY')
    return Number(year) === Number(object.year)
  }

  return {
    filterSimulationName,
    filterModelType,
    filterParameterType,
    filterDateDay,
    filterDateMonth,
    filterDateYear
  }
}