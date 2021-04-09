import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import theme from '../../../styles/theme'
import Charter from './children/Charter'
import { useModelCardState } from './state'
import { useModelCardStyles } from './styles'



const ModelCard = ({options=[],justify,alignItems,eventEmitted}) => {
  const classes = useModelCardStyles(theme)
  const { updateStep,step } = useModelCardState() 
  const [selected,setSelected]=useState('')
  
  
  const handleClickCharter =(charter)=>{
    eventEmitted(charter)
    setSelected(charter)
  }

  return (
    <Grid container item xs={12} justify={justify} alignItems={alignItems}>
      {options.map((opt,index)=>{
        const {name}=opt
        return (
          <Grid key={index} >
            <Charter 
              key={index} 
              name={name} 
              handleClickCharter={handleClickCharter}
              selected={selected}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ModelCard
