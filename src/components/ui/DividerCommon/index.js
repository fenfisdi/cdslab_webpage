import { Divider, makeStyles } from '@material-ui/core'
import React from 'react'

export const sysManagementStyles = makeStyles((theme) => ({
  divider: {
    width: '100%',
    backgroundColor: '#E5E5E5',
    marginBottom: '10px',
    marginTop: '10px'
  },
}))

const DividerCommon = () => {
  const classes = sysManagementStyles()
  return (
    <>
      <Divider className={classes.divider} light></Divider>
    </>
  )
}

export default DividerCommon
