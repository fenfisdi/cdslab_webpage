import { isEmpty } from 'lodash'
import {  useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useInitialPopulationActions } from '../../../../actions/InitialPopulationActions'
import { useStore } from '../../../../store/storeContext'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import CheckIcon from '@material-ui/icons/Check'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'

export  const useInitialPopulationSetUpState = () => {
  const history = useHistory()
  const {   
    dispatch
  } = useStore()

  const { 
    getListAllowedVariablesAction
  } = useInitialPopulationActions(dispatch)

  const [idConfiguration, setIdConfiguration] = useState('')
 
  const schemaItems= {
    name: '',
    distribution: {
      'type':'',
      'kwargs': {},
      'numpy_type':''
    },     
    state: '',
    values:{
      var:''
    }   
  }

  const schemaOptions = {
    var:{options:[]}
  }

  const [itemsTable,setItemTable]= useState([{...schemaItems}])
  
  const [optionsByItem,setOptionsByItem]= useState({
    0:{...Object.assign({}, schemaOptions)}
  })

  const fieldsToTable = {
    headers:[
      {label:'',attr:'consecutive'},
      {label:'Variables to configure',attr:'var'},     
      {label:'',attr:'actionZoneInitialPopulation'},
    ],
    body:{ 
      consecutive:{
        label:(index)=>{
          return `# ${index}`
        }
      },       
      var:{        
        type:'select',
        props:{
          name:'var',
          label:'',
          disabled:false,
          required:true,
          fullWidth:false,
          variant:'outlined',            
          styles:{'padding':'0px'},          
          onChange:({event,indexItemTable,propHeader})=>{            
            const value = event.target ? event.target.value : ''    
            const itemsCopy = [...itemsTable]
            itemsCopy[indexItemTable] = { ...itemsCopy[indexItemTable], values: {...itemsCopy[indexItemTable].values,[propHeader.attr]:value} }            
            setItemTable(itemsCopy)            
          }        
        }           
      },
      actionZoneInitialPopulation:{
        type:'actionZoneInitialPopulation',
        props:{
          options:[    
            {
              onClick: e => console.log(e),
              isCheckable:true,
              className: 'option-button-setting',
              children: SettingsOutlinedIcon,
              validation:(itemValue)=>{
                return itemValue.values.var!=''
              }
            },
            {
              onClick: e => console.log(e),
              isCheckable:true,
              className: 'option-button-check',
              children:CheckIcon,
              validation:(itemValue)=>{
                return itemValue.name!=''
              }
            },
            {
              onClick: (_,{option,itemTable,indexItem}) => {
                console.log(option,itemTable,indexItem)
                if(itemsTable.length>1){                  
                  const itemsCopy = [...itemsTable]
                  itemsCopy.splice(indexItem, 1)                  
                  setItemTable(itemsCopy)
                }
              },
              className: 'option-button-delete',
              children:DeleteOutlineIcon
            }
          ]
        }
      }        
    },                     
  }

  const parseInformationOptionsByItem =(arrayOptions=[])=>{
    return arrayOptions.map((option)=>{
      return shcemaInformationParseOptionsByItem(option)
    })

  }

  const shcemaInformationParseOptionsByItem = (option)=>{
    return {
      label:option,
      value:option
    }
  }
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])

  useEffect(()=>{
    if(idConfiguration!='' && optionsByItem[0].var.options.length == 0){
      getListAllowedVariablesAction(idConfiguration).then((response)=>{        
        const newOptionByItems =Object.assign({}, optionsByItem[0])
        newOptionByItems.var.options = parseInformationOptionsByItem(response.data.data)
        setOptionsByItem({...optionsByItem,[0]:newOptionByItems})
      })
    }
  },[idConfiguration])

  useEffect(()=>{
    console.log('itemsTable',itemsTable)
  },[itemsTable])

  useEffect(()=>{
    console.log('optionsByItem',optionsByItem)
  },[optionsByItem])

  const handlerAddOption =()=>{
    const newSchemaOtion = Object.assign({}, schemaOptions)
    getListAllowedVariablesAction(idConfiguration).then((response)=>{
      newSchemaOtion.var.options = parseInformationOptionsByItem(response.data.data)
      setOptionsByItem({...optionsByItem,[itemsTable.length]:newSchemaOtion})
      setItemTable([...itemsTable,schemaItems])
    })    
  }


  
  return {
    idConfiguration,
    fieldsToTable,
    itemsTable,
    optionsByItem,    
    getListAllowedVariablesAction,
    handlerAddOption
  }

}