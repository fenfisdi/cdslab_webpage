import { Typography } from '@material-ui/core'
import React from 'react'
import DividerCommon from '../DividerCommon'

const SubtitleCommon = ({ text }) => {
  return (
    <>
      <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px'}}>
        { text }
      </Typography>
      <DividerCommon />
    </>
  )
}

export default SubtitleCommon
