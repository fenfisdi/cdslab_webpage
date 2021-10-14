import React from 'react'
import { AccordionSummary,Accordion,AccordionDetails,makeStyles } from '@material-ui/core'
import { Typography, Grid  } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TableSlider from '../../../../AgentsTableConfiguration/TableInput/Slider'
import cloneDeep from 'lodash.clonedeep'


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


const AccordionContainer = ({element,arrayGroup,parent,setGroupsArray}) => {
  const classes = useStyles()

  const handleItemChanged = ({i, event,child,element}) => {
    
    const newElment = cloneDeep(element)
    const deepElement = parent.split(',')
    const newArrayGroup = cloneDeep(arrayGroup)
    const newEvent = cloneDeep(event)

     
    newElment.children[i].value = newEvent?.slider?.value
     let str = `newArrayGroup[${deepElement[0]}]`
     if(deepElement.length >1){
      str = str + '[\'children\']'
      deepElement.forEach((deepElementIndex,index) => {
        if(index>=1 && index<deepElement.length-1) {
          str = str + `[${deepElementIndex}]['children']`
        }else if(index>=1 && index==deepElement.length-1){
         str = str + `[${deepElementIndex}]`
        }
      })
     }
     str = str + '= newElment'
     eval(str)
     setGroupsArray(newArrayGroup)  
                  
  }

  const formatChildren = () => {
    return element?.children?.map((child, i) => {
      const newChild = cloneDeep(child)
      if(newChild.children){
        
        return (<AccordionContainer 
          element={newChild} 
          key={`${parent},${element.name},${i}`} 
          arrayGroup={arrayGroup}
          parent={`${parent},${i}`}
          setGroupsArray={setGroupsArray}
        />
        ) 
      }else{
        return (<TableSlider
          key={`slider-${parent},${element.name},${i}`}
          name={newChild.name}          
          value={newChild.value}
          min={0}
          max={100}
          step={1}
          onChange={(event) => handleItemChanged({i, event,child,element})}
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