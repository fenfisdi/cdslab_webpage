import React from 'react'
import { AccordionSummary,Accordion,AccordionDetails,makeStyles } from '@material-ui/core'
import { Typography, Grid  } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
    display: 'flex',
    'min-width': '760px',
    padding: '10px',
    'flex-direction': 'column',
  },
  accordionCard : {
    display: 'flex',    
    'flex-direction': 'column',
    width: '100%',
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

  
  const formatChildren = () => {
    return element?.children?.map((child, i) => {
      
      if(child.children){
        
        return (<AccordionContainer className={classes.accordionCard} element={child} key={i} />
        ) 
      }else{
        return (<TableSlider
          name={child.name}
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
    
    <Grid container item xs={12} className={classes.accordion}>
      <Accordion className={classes.accordionCard}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> {element.name} </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionCard}>
          {
            formatChildren() 
          }
        </AccordionDetails>
      </Accordion>
      
    </Grid>
    
  )
  
}

export default AccordionContainer