import { AgentsDistribution } from '../components/AgentsModels/AgentsDistribution'
import React from 'react'
import { AgentsModalConstant } from '../components/AgentsModels/AgentsModalContainer/AgentsModalConstant'
import { OPTIONS_MODAL } from '../constants/agents'
import { AgentsModalNumpy } from '../components/AgentsModels/AgentsModalContainer/AgentsModalNumpy'
import { AgentsModalEmpirical } from '../components/AgentsModels/AgentsModalContainer/AgentsModalEmpirical'
import { AgentDiseaseState } from '../components/AgentsModels/AgentDiseaseState'
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
      width:'70%',
      height:'70%'
    }        
  case OPTIONS_MODAL.EMPIRICAL:
    return {
      container:AgentsModalEmpirical,
      props,
      width:'80%',
      height:'80%'
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
      container:AgentsModalNumpy,
      props,
      width:'40%',
      height:'40%'
    }
  case OPTIONS_MODAL.DISEASESTATE:
    return {
      container:AgentDiseaseState,
      props,
      width:'50%',
      height:'50%'
    }
  default:
    return null
  }
  
}

export const titleCase = (str)=> {
  var splitStr = str.toLowerCase().split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)     
  }
  // Directly return the joined string
  return splitStr.join(' ') 
}

export const replaceString = (str,charactertoSearch,characterReplace)=>{
  return str.split(charactertoSearch).join(characterReplace)
}


export const deleteItemsConfigureTable =(item,items,index)=>{
  if(item.state.trim().length>0){
    return item
  }else if(item.state.trim() == ''){                
    items.splice(index,1)
    return items
  }
}