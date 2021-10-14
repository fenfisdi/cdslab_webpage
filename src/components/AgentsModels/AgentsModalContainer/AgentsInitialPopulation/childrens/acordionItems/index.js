import React from 'react'
import { Grid } from '@material-ui/core'
import AccordionContainer from './accordionContainer'
import cloneDeep from 'lodash.clonedeep'


const AcordionItems = ({groupsArray,setGroupsArray}) => {


  return (
    
    <Grid 
      container 
      item 
      xs={12} 
      justify='center' 
      alignItems='center' 
      style={{ width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'}}>
      {
        groupsArray.map((element,i) => {
          const newElment = cloneDeep(element)
          return (
            <AccordionContainer  
              key={`parent-${i}`} 
              element={newElment}
              arrayGroup={groupsArray}
              setGroupsArray={setGroupsArray}
              parent={`${i}`} 
            />
          )
        })
      }
    </Grid>
    
  )
  
}

export default AcordionItems