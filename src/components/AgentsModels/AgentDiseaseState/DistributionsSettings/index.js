import React from 'react'
import { Container } from './styles'
import DistributionCard from './DistributionCard'
import {isEmpty } from 'lodash'


const DistributionsSettings = ({
  items,
  itemConfiguration,
  handleConfig
}) => {
    
  const renderCards = (itemsCards) => {
    return (
      <Container>
        {Object.keys(itemsCards).map((item,index) =>{
          const cardSchema ={
            name:itemsCards[item],
            description:'here info help',
            state:''
          }
          return <DistributionCard 
            item={cardSchema} 
            index={index} 
            key={index} 
            handleSettings={()=>{              
              handleConfig({cardSchema,itemConfiguration})                          
            }}/>
        })}
      </Container>
    )
  }

  return (
    <div>
      {!isEmpty(items) && renderCards(items)}

    </div>
  )
}

export default DistributionsSettings
