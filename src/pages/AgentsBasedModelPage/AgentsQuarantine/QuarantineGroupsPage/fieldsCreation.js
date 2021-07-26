import { useSwitchInputValue } from '../../../../components/ui/SwitchInput/useSwitchInputValue'



const useFieldsCreation = ()=>{
  
  const cyclicField	= useSwitchInputValue(false,[],{
    name:'cyclicField',
  })

  const tracingField = useSwitchInputValue(false,[],{
    name:'tracingField',
  })
  return {
    cyclicField,
    tracingField,
  }
}

export default useFieldsCreation