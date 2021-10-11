import React, { useEffect, useState } from 'react'
import { AccordionSummary,Accordion,AccordionDetails, Button,makeStyles } from '@material-ui/core'
import { Typography, Grid  } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const AcordionItems = () => {

  const classes = useStyles()

  const[isValid,setIsValid] = useState(false)

  
  let arregloFormat = []

  const format = (children) =>{
    const var1 = 
    [
      ['Adultos','Jovenes','Niños'],
      ['alto','medio','bajo'],
      ['hombre','mujer']
    ]

    recursive(var1,0)
  }

  const recursive = (dataArray, pos) => {
    var jsonList = []
    for (let i = 0; i < dataArray[pos].length; i++) {
      var jsonRes = {
        'name' : dataArray[pos][i]
      }
      jsonList.push(jsonRes)
    }

    if((pos + 1) < dataArray.length){
      var child = recursive(dataArray,(pos + 1))
      for (let i = 0; i < jsonList.length; i++) {
        jsonList[i]['children'] = child
      }
    }

    console.log(jsonList)
    return jsonList
  }


  return (
    <div>
      <Grid container item xs={12} justify='center' alignItems='center'>
        <Button onClick={format}>asdasd</Button>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </Grid>
    </div>
  )
  
}

export default AcordionItems