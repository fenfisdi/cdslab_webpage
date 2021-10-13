import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import AccordionContainer from './accordionContainer'


const AcordionItems = ({configurationList,setConfigurationList}) => {

  
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
  console.log(':::::::::::::::::groupsArray>',groupsArray)

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
              configurationList={configurationList} 
              setConfigurationList={setConfigurationList} />
          )
        })
      }
    </Grid>
    
  )
  
}

export default AcordionItems