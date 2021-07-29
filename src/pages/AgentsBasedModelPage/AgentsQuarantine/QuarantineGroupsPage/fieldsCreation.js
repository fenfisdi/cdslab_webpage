import { useSwitchInputValue } from '../../../../components/ui/SwitchInput/useSwitchInputValue'



const useFieldsCreation = ()=>{
  
  const cyclicField	= useSwitchInputValue(false,[],{
    name:'cyclicField',
    label:'cyclicField',
    title:'cyclicField'
  })

  const tracingField = useSwitchInputValue(false,[],{
    name:'tracingField',
    label:'tracingField',
    title:'tracingField'
  })
  return {
    cyclicField,
    tracingField,
  }
}

export default useFieldsCreation