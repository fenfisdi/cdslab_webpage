import React from 'react'
import {
  Button,
  Grid
} from '@material-ui/core'


export const UploadButton = ({
  xs,
  onChange,
  accept,
  fileName
}) => {

  return (
    <Grid xs={xs} container item direction="column" justify="center" alignItems="center">
      <Grid xs={12} container item direction="row" justify="center" alignItems="baseline">
        <Button
          variant="contained"
          component="label"
        >
          Upload File
          <input
            type="file"
            name="file"
            onChange={onChange}
            hidden
            accept={accept}
          />
        </Button>

      </Grid>
      <Grid xs={12} container item direction="row" justify="center" alignItems="baseline">
        {fileName &&<p>{ fileName}</p>}
      </Grid>
    </Grid>
  )
}
