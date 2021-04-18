import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import theme from '../../../styles/cdslabTheme'
import Charter from './children/Charter'
import { useModelCardState } from './state'
import { useModelCardStyles } from './styles'



const ModelCard = ({ options = [], justify, alignItems, eventEmitted }) => {
  const classes = useModelCardStyles(theme)
  const { updateStep, step } = useModelCardState()
  const [selected, setSelected] = useState('')


  const handleClickCharter = (charter) => {
    const { indetifier } = charter || {}
    eventEmitted(charter)
    setSelected(indetifier)
  }

  return (
    <Grid container item xs={12} justify={justify} alignItems={alignItems}>
      {options.map((opt, index) => {
        const { name, indetifier } = opt
        return (
          <Grid key={index} >
            <Charter
              key={index}
              name={name}
              indetifier={indetifier}
              handleClickCharter={handleClickCharter}
              selected={selected}
              extraOption={opt}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ModelCard
