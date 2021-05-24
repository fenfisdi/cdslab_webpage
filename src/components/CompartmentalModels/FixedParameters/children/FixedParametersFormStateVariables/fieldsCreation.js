export const creationResponseStateVariableForm =({fields})=>{
  let arrayResponse=[]
  let parameterResponse={
    'label': '',
    'value': 0,
    'to_fit':true,
    'representation':''
  }
  
  for (const keyfields in fields) {
    
    const value = fields[keyfields]['value']
    parameterResponse={}
    parameterResponse.label = keyfields
    parameterResponse.value =  value
    parameterResponse.to_fit = false
    parameterResponse.representation = fields[keyfields]['representation'] || ''
    arrayResponse.push(parameterResponse)
  }
  
  return arrayResponse
}