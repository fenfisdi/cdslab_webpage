export const checkErrorsStateVariableForm = ({fields})=>{
  let isOk = false
  for (const keyfields in fields) {
    const fieldProp = fields[keyfields]
    if (fieldProp.value=='' || fieldProp.errors.length>0) {      
      return false
    }
    isOk = true    
  }
  return isOk
}
