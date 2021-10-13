import React from 'react'
import { Grid } from '@material-ui/core'
import AccordionContainer from './accordionContainer'


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
          return (
            <AccordionContainer  
              key={i} 
              element={element}
              arrayGroup={groupsArray}
              setGroupsArray={setGroupsArray}
              parent={i} 
            />
          )
        })
      }
    </Grid>
    
  )
  
}

export default AcordionItems