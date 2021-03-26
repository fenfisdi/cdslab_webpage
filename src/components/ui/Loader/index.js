import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'

const LoaderComponent = ({ width, height, marginTop }) => {
  return (
    <Box display="flex" width={width} height={height} marginTop={marginTop}>
      <Box m="auto">
        <CircularProgress />
      </Box>
    </Box>
  )
}

export default LoaderComponent
