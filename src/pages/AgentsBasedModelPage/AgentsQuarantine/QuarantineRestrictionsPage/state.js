import {  useState } from 'react'
import { useHistory } from 'react-router'


export  const useQuarantineRestrictionsPageState = () => {

  const history = useHistory()
  const [initialDate, setInitialDate] = useState(null)
  
  const handleDate = (dateValue) => {
    setInitialDate(dateValue)
  } 
  
  return {
    initialDate,
    setInitialDate,
    handleDate
  }

}