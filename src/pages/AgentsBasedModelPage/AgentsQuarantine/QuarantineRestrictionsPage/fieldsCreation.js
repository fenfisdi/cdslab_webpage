import { useInputValue } from '../../../components/ui/Input/useInputValue'
import { useSelectValue } from '../../../components/ui/Select/useSelectValue'

const checkTypeDecimal = (event) => {
  const keyCod = event.keyCode
  const key = event.key
  
  if (![8, 9, 35, 36, 37, 39, 46, 190].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}

const useFieldsCreation = ()=>{
  

  const globalCuarantineTimeSelect = useSelectValue('', [], {
  })

  const globalCuarantineTimeInput = useInputValue('', [], {
    name: 'globalCuarantineTimeInput',
    type: 'text',
    label: 'globalCuarantineTime',
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })

  const timeWithoutRestrictionsModeSelect = useSelectValue('', [], {
  })

  const timeWithoutRestrictionsSelect = useSelectValue('', [], {
  })

  const timeWithoutRestrictionsInput = useInputValue('', [], {
    name: 'timeWithoutRestrictionsInput',
    type: 'text',
    label: 'timeWithoutRestrictions',
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })



  return {
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput
  }
}

export default useFieldsCreation