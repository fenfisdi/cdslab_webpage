import React from 'react'
import {
  Grid
} from '@material-ui/core'
import DatePicker from '../DatePicker'
import Box from '@material-ui/core/Box'


export const RangePicker = ({
  xs,
  valueFirst,
  valueSecond,
  onChangeFirst,
  onChangeSecond,
  onOpenFirst,
  onOpenSecond,
  onCloseFirst,
  onCloseSecond,
  errorsFirst,
  errorsSecond,
  helperText
}) => {

  return (
    <Grid xs={xs} container item direction="row" justify="center" alignItems="baseline">

      <DatePicker
        variant="inline"
        format="dd/MM/yyyy"
        id="initial-date"
        label="Initial Date"
        helperText={helperText}
        error={errorsFirst}
        onChange={onChangeFirst}
        onOpen={onOpenFirst}
        onClose={onCloseFirst}
        value={valueFirst}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        style={{ 'marginRight': '10px' }}
      />
      <Box> to </Box>
      <DatePicker
        variant="inline"
        format="dd/MM/yyyy"
        id="final-date"
        label="Final Date"
        helperText={helperText}
        error={errorsSecond}
        onChange={onChangeSecond}
        onOpen={onOpenSecond}
        onClose={onCloseSecond}
        value={valueSecond}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        style={{ 'marginLeft': '10px' }}

      />
    </Grid>
  )
}
