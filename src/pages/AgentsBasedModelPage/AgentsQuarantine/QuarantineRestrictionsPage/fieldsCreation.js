import { useInputValue } from '../../../../components/ui/Input/useInputValue'
import { useSelectValue } from '../../../../components/ui/Select/useSelectValue'


const checkTypeDecimal = (event) => {
  const keyCod = event.keyCode
  const key = event.key
  
  if (![8, 9, 35, 36, 37, 39, 46, 190].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}

const useFieldsCreation = ({dataGlobalCuarantineTimeSelect,dataTimeWithoutRestrictionsModeSelect,dataTimeWithoutRestrictionsSelect})=>{
  

  const globalCuarantineTimeSelect = useSelectValue('', [], {
    options:dataGlobalCuarantineTimeSelect
  })

  const globalCuarantineTimeInput = useInputValue('', [], {
    name: 'globalCuarantineTimeInput',
    type: 'text',    
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })

  const timeWithoutRestrictionsModeSelect = useSelectValue('', [], {
    options:dataTimeWithoutRestrictionsModeSelect
  })

  const timeWithoutRestrictionsSelect = useSelectValue('', [], {
    options:dataTimeWithoutRestrictionsSelect
  })

  const timeWithoutRestrictionsInput = useInputValue('', [], {
    name: 'timeWithoutRestrictionsInput',
    type: 'text',    
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })


  const restrictionsDelayInputModal = useInputValue('', [], {
    name: 'delay',
    type: 'text',
    label: '',
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })

  
  const restrictionsDelaySelectModal = useSelectValue('', [], {
    options:dataGlobalCuarantineTimeSelect
  })

  const restrictionsQuarantinelInputModal = useInputValue('', [], {
    name: 'Quarantinel',
    type: 'text',
    label: '',
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })

  
  const restrictionsQuarantinelSelectModal = useSelectValue('', [], {
    options:dataGlobalCuarantineTimeSelect
  })

  const restrictionsUnrestrictedInputModal = useInputValue('', [], {
    name: 'Unrestricted',
    type: 'text',
    label: '',
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })

  
  const restrictionsUnrestrictedSelectModal = useSelectValue('', [], {
    options:dataGlobalCuarantineTimeSelect
  })


  return {
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput,
    restrictionsDelayInputModal,
    restrictionsDelaySelectModal,
    restrictionsQuarantinelInputModal,
    restrictionsQuarantinelSelectModal,
    restrictionsUnrestrictedInputModal,
    restrictionsUnrestrictedSelectModal
  }
}

export default useFieldsCreation