import { useEffect, useState } from 'react'
import * as moment from 'moment'

export const useRangePickerValue = (valFirst, valSecond, validator, extras) => {
  const [valueFirst, setValueFirst] = useState(valFirst)
  const [valueSecond, setValueSecond] = useState(valSecond)
  const [isPressFirst, setIsPressFirst] = useState(false)
  const [isPressSecond, setIsPressSecond] = useState(false)
  const [helperText, setHelperText] = useState(null)
  const [errorsFirst, setErrorsFirst] = useState(false)
  const [errorsSecond, setErrorsSecond] = useState(false)

  const onChangeFirst = (e) => {
    setValueFirst(e)
  }

  const onOpenFirst = () => {
    !isPressFirst && setIsPressFirst(true)
  }

  const onCloseFirst = () => {
    if (isPressFirst && valueFirst == null) {
      setErrorsFirst(true)
      setHelperText(validator.message)
    }
  }


  const onChangeSecond = (e) => {
    setValueSecond(e)
  }

  const onOpenSecond = () => {
    !isPressSecond && setIsPressSecond(true)
  }

  const onCloseSecond = () => {
    if (isPressSecond && valueFirst == null) {
      setErrorsSecond(true)
      setHelperText(validator.message)
    }
  }

  const formatterValue = (formatter = 'DD/MM/YYYY') => {
    return {
      valueFirst: valueFirst ? moment(valueFirst).format(formatter) : valueFirst,
      valueSecond: valueSecond ? moment(valueSecond).format(formatter) : valueSecond
    }

  }

  useEffect(() => {
    if (errorsFirst) {
      setErrorsFirst(false)
      setHelperText('')
    }
    if (errorsSecond) {
      setErrorsSecond(false)
      setHelperText('')
    }
    if (valueFirst && valueSecond) {
      if (moment(valueFirst).isSame(valueSecond) || moment(valueFirst).isBefore(valueSecond)) {
        setErrorsFirst(false)
        setErrorsSecond(false)
      } else if (moment(valueFirst).isAfter(valueSecond)) {
        setErrorsFirst(true)
        setErrorsSecond(true)
      }
    }

  }, [valueFirst, valueSecond])

  useEffect(() => {
    if (errorsFirst || errorsSecond) {
      setHelperText('Invalid Range')
    }
  }, [errorsFirst, errorsSecond])

  return {
    errorsFirst,
    errorsSecond,
    helperText,
    valueFirst,
    valueSecond,
    onChangeFirst,
    onChangeSecond,
    setValueFirst,
    setValueSecond,
    onOpenFirst,
    onOpenSecond,
    onCloseFirst,
    onCloseSecond,
    formatterValue,
    ...extras,
  }
}
