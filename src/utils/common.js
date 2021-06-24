import { AgentsDistribution } from '../components/AgentsModels/AgentsDistribution'
import React from 'react'
import { AgentsModalConstant } from '../components/AgentsModels/AgentsModalContainer/AgentsModalConstant'
import { OPTIONS_MODAL } from '../constants/agents'
export const replaceStringInRange =(string,start,length,substitute)=>{
  return  string.substr(0,start)+substitute+string.substr(length)
}

export const checkTypePhoneNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key
  if (![8, 9, 35, 36, 37, 39, 46,190].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}

// process CSV data
export const processData = dataString => {  
  const dataStringLines = dataString.split(/\r\n|\n/)
  const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/)

  const list = []
  for (let i = 1; i < dataStringLines.length; i++) {
    const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/)
    if (headers && row.length == headers.length) {
      const obj = {}
      for (let j = 0; j < headers.length; j++) {
        let d = row[j]
        if (d.length > 0) {
          if (d[0] == '"')
            d = d.substring(1, d.length - 1)
          if (d[d.length - 1] == '"')
            d = d.substring(d.length - 2, 1)
        }
        if (headers[j]) {
          obj[headers[j]] = d
        }
      }

      // remove the blank rows
      if (Object.values(obj).filter(x => x).length > 0) {
        list.push(obj)
      }
    }
  }

  // prepare columns list from headers
  const columns = headers.map(c => ({
    name: c,
    selector: c,
  }))

  return {
    body:list,
    headers:columns
  }
}

export const formatYmd = date => date.toISOString().slice(0, 10)



export const renderComponentChildre = (componentChildren,props) => {
  switch (componentChildren) {
  case OPTIONS_MODAL.DISTRIBUTION:
    return {
      container:AgentsDistribution,
      props,
      width:'50%',
      height:'50%'
    }        
  case OPTIONS_MODAL.EMPIRICAL:
    return {
      Component:<h1>Empirical</h1>
    }
  case OPTIONS_MODAL.CONSTANT:
    return {
      container:AgentsModalConstant,
      props,
      width:'30%',
      height:'30%'
    }   
  case OPTIONS_MODAL.WEIGTHS:
    return {
      Component:<h1>Weigths</h1>
    }
  case OPTIONS_MODAL.NUMPY:
    return {
      Component:<h1>Numpy</h1>
    }
  default:
    return null
  }
  
} 