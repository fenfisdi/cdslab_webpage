import React, { useEffect, useState } from 'react'
import { AccordionSummary,Accordion,AccordionDetails, Button,makeStyles } from '@material-ui/core'
import { Typography, Grid  } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TableInput from '../../../../AgentsTableConfiguration/TableInput'
import TableSlider from '../../../../AgentsTableConfiguration/TableInput/Slider'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion : {
    display: 'block',
    'min-width': '760px',
    padding: '10px'
  }
  
}))


const AccordionContainer = ({element,configurationList,setConfigurationList}) => {
  const classes = useStyles()

  const handleItemChanged = (i, event, child) => {
    //child.value = event?.slider?.value
    console.log('configurationList',configurationList)
    console.log('child',child)
    console.log('event',event)
    console.log('i',i)

    configurationList[0][i].value = event?.slider?.value
    setConfigurationList(configurationList)
  }

  console.log(configurationList)
  const formatChildren = () => {
    return element?.children?.map((child, i) => {
      
      if(child.children){
        
        return (<div className="col-md-12 container">
          <AccordionContainer className="col-md-12" element={child} key={i} />
        </div>
        ) 
      }else{
        return (<TableSlider
          name={child.name}
          className={classes.accordion}
          id={i}
          value={child.value}
          min={0}
          max={100}
          step={1}
          onChange={(event) => handleItemChanged(i, event,child)}
        />)
      }
    }) 
  }

  return (
    <div>
      <Grid container item xs={12} justify='center' alignItems='center' className={classes.accordion}>
        <Accordion className="col-md-12">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}> {element.name} </Typography>
          </AccordionSummary>
          <AccordionDetails className="col-md-12">
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