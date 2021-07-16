import React from 'react'
import DistributionCard from './DistributionCard'
import {isEmpty } from 'lodash'
import TitleIcon from '../../../layouts/TitleIcon'
import { Grid } from '@material-ui/core'


const DistributionsSettings = ({
  items,
  itemConfiguration,
  handleConfig
}) => {
    
  const renderCards = (itemsCards) => {
    
    return (
      <Grid container item xs={6} direction='column' justify="center" alignItems="center">
        {Object.keys(itemsCards).map((item,index) =>{          
          const cardSchema ={
            name:itemsCards[item],
            description:'here info help',
            state:itemConfiguration.distributions[itemsCards[item]] && 'CONFIGURED'
          }
          return <DistributionCard 
            item={cardSchema} 
            index={index} 
            key={index} 
            handleSettings={()=>{              
              handleConfig({cardSchema,itemConfiguration})                          
            }}/>
        })}
      </Grid>
    )
  }

  return (
    <Grid 
      container 
      item xs={12} 
      direction='column' 
      justify="center" 
      alignItems="center"
      style={{marginTop:'4%'}}>
      <TitleIcon
        style={{'marginRight':'11%'}} 
        title={'Disease State Distributions'} 
        otherIconType={true} 
        icon={''} 
        fontSize='20px'        
      />
      
      {!isEmpty(items) && renderCards(items)}

    </Grid>
  )
}

export default DistributionsSettings
