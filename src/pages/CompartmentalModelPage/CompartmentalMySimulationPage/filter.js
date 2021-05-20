import moment from 'moment'

export const useComparmentalMySimulationFilter = () => {

  function filterSimulationName(elemento,object) {
    if (elemento.name.toLowerCase().indexOf(object.search.toLowerCase()) !== -1) {
      return true
    } else {
      return false
    }
  }
  function filterModelType(elemento,object) {
    if(elemento.parameter_type){
      if (elemento.model_name.toLowerCase().trim() === object.modelType.toLowerCase().trim()) {
        return true
      } else {
        return false
      }
    }else{
      return false
    }
  }
  function filterParameterType(elemento,object) {
    if(elemento.parameter_type){
      if (elemento.parameter_type.toLowerCase().trim() === object.parameterType.toLowerCase().trim()) {
        return true
      } else {
        return false
      }
    }else{
      return false
    }
  }
  function filterDateDay(elemento,object) {
    var day = moment(elemento.inserted_at).format('DD')
    if (Number(day) === Number(object.day)) {
      return true
    } else {
      return false
    }
  }
  function filterDateMonth(elemento,object) {
    var month = moment(elemento.inserted_at).format('MM')
    if (Number(month) === Number(object.month)) {
      return true
    } else {
      return false
    }
  }
  function filterDateYear(elemento,object) {
    var year = moment(elemento.inserted_at).format('YYYY')
    if (Number(year) === Number(object.year)) {
      return true
    } else {
      return false
    }
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