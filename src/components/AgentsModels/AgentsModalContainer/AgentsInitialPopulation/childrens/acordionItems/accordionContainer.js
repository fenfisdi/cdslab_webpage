import React, { useEffect, useState } from 'react'
import { AccordionSummary,Accordion,AccordionDetails, Button,makeStyles } from '@material-ui/core'
import { Typography, Grid  } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TableInput from '../../../../AgentsTableConfiguration/TableInput'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))


const AccordionContainer = ({element,configurationList,setConfigurationList}) => {
  const classes = useStyles()

  const handleItemChanged = (i, event, child) => {
    //child.value = event?.slider?.value
    console.log('configurationList',configurationList)
    console.log('child',child)
    console.log('event',event)
    console.log('i',i)
    
    const newSchemaOtion = Object.assign({}, configurationList)
    newSchemaOtion[0][i].value = event?.slider?.value
    setConfigurationList(newSchemaOtion)
  }

  console.log(configurationList)
  const formatChildren = () => {
    return element?.children?.map((child, i) => {
      
      if(child.children){
        
        return (<AccordionContainer element={child} key={i} />
        ) 
      }else{
        return (<TableInput
          key= {i}
          type='slider'
          name={child.name}
          value={child.value}
          onChange={(event) => handleItemChanged(i, event,child)}
          min= {0} max= {1} step= {0.001} initialValue={0} 
        />)
      }
    }) 
  }

  return (
    <div>
      <Grid container item xs={12} justify='center' alignItems='center'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}> {element.name} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            </Typography> */}
            {
              formatChildren() 
            }
          </AccordionDetails>
        </Accordion>
      
      </Grid>
    </div>
  )
  
}

export default AccordionContainer