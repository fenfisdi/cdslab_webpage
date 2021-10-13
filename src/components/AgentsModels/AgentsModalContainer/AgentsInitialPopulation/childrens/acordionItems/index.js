import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import AccordionContainer from './accordionContainer'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const AcordionItems = ({configurationList,setConfigurationList}) => {

  const classes = useStyles()
  const [groupsArray, setGroupsArray] = useState([])


  useEffect(()=>{
    if(configurationList.length>0){            
      const [first, ...rest] = configurationList
      const arr = [...rest,first]
      recursive(arr,0)
    }
  },[configurationList])


  const recursive = (dataArray, pos) => {
    var jsonList = []
    console.log('dataarray',dataArray)
    for (let i = 0; i < dataArray[pos].length; i++) {
      var jsonRes = {
        'name' : dataArray[pos][i].name
      }
      jsonList.push(jsonRes)
    }

    if((pos + 1) < dataArray.length){
      var child = recursive(dataArray,(pos + 1))
      for (let i = 0; i < jsonList.length; i++) {
        jsonList[i]['children'] = child
      }
    }
    setGroupsArray(jsonList)
    return jsonList
  }


  return (
    <div>
      <Grid container item xs={12} justify='center' alignItems='center'>
        {
          groupsArray.map((element,i) => {
            return (
              <AccordionContainer className="col-md-12" key={i} element={element} configurationList={configurationList} setConfigurationList={setConfigurationList} />
            )
          })
        }
      </Grid>
    </div>
  )
  
}

export default AcordionItems