import { Typography } from '@material-ui/core'
import React from 'react'
import ModelCard from '../../../CompartmentalModels/ModelCard'
import { AgentsDistributionTitle } from './style'

export const AgentsDistribution = ({handleEventEmitted}) => {

  const options = [
    {  
      name: 'New simulation',
      indetifier: 'new_simulation',
      url: 'compartmentalModels/newSimulations',
      ruta: 'newSimulations'
    },
    {
      name: 'My simulations',
      indetifier: 'my_simulations',
      url: 'compartmentalModels/mySimulations',
      ruta: 'mySimulations'
    }
  ]


  return (
    <div>
      <AgentsDistributionTitle>
        <Typography variant="body2" component="p">
          Choose one of the predefined models
        </Typography>
      </AgentsDistributionTitle>

      {options && options.length > 0 && <ModelCard
        justify="center"
        alignItems="center"
        direction="column"
        options={options}
        eventEmitted={(cardData) => handleEventEmitted(cardData)}
        disabled={false}
      />}
  
    </div>
  )
}
