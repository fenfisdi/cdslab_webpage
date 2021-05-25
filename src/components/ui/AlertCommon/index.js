import { Alert, AlertTitle } from '@material-ui/lab'
import React from 'react'

const AlertCommon = ({title, message, severity}) => {
  return(
    <>
      <Alert severity={ severity }>
        <AlertTitle>{ title }</AlertTitle>{ message }
      </Alert>
    </>
  )
}

export default AlertCommon