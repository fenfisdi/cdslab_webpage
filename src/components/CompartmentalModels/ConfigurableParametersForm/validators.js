
  
export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
    'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
export const TYPE_NUMBER = 'This field must be a phone number'
  
export const VALIDATORS_CONFIGURABLE_PARAMETERS_FORM = {
  selectors: {
    type: 'required',
    message: REQUIRED_MESSAGE,
    value: true
  }
    
}
  
export const checkTypePhoneNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key
  
  if (![8, 9, 35, 36, 37, 39, 46, 187].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}

export const checkErrorsForm = ({fieldsParametersForm,setIsValid})=>{
  let isOk = false
  for (const keyfieldsParameters in fieldsParametersForm) {
    const { value: selectValue } = fieldsParametersForm[keyfieldsParameters]['SELECTInput']      
    if(selectValue!=''){        
      const extraFields =  fieldsParametersForm[keyfieldsParameters][`${selectValue}Input`]
      extraFields.every(v => {
        if (v.value=='' || v.errors.length>0) {
          isOk=false
          return false
        }                  
        isOk = true          
        return true
      })
    }else{
      isOk=false
    }

    setIsValid(isOk)
    if(!isOk){
      return
    }
  }
}
  