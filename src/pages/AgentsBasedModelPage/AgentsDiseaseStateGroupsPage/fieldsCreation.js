import { useInputValue } from '../../../components/ui/Input/useInputValue'
import { useSelectValue } from '../../../components/ui/Select/useSelectValue'
import { useSliderValue } from '../../../components/ui/Slider/useSliderValue'
import { useSwitchValue } from '../../../components/ui/Switch/useSwitchValue'
import { checkTypeDecimal } from '../../../utils/common'

const useFieldsCreation = ()=>{
  const spreadRadius = useInputValue('', [], {
    name: 'spreadRadius',
    type: 'text',
    label: 'spreadRadius',
    onKeyDown: (event) => {
      return checkTypeDecimal(event)
    }
  })

  const canGetinfected	= useSwitchValue(false,[],{
    name:'Cangetinfected',
  })

  const isInfected = useSwitchValue(false,[],{
    name:'isInfected',
  })

  const canSpread	= useSwitchValue(false,[],{
    name:'canSpread',
  })

  const distanceUnits = useSelectValue('', [], {
  })

  const spreadProbability = useSliderValue(0,[],{})


  return {
    spreadRadius,
    canGetinfected,
    isInfected,
    canSpread,
    distanceUnits,
    spreadProbability
  }
}

export default useFieldsCreation