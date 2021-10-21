import { find, isEmpty } from 'lodash'
import {  useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useInitialPopulationActions } from '../../../../actions/InitialPopulationActions'
import { useStore } from '../../../../store/storeContext'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import CheckIcon from '@material-ui/icons/Check'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'

export  const useInitialPopulationSetUpState = ({
  modalSettings,
  setModalSettings,
  setShowError,
  setGroupsArray}) => {
    
  const history = useHistory()
  const {   
    dispatch
  } = useStore()

  const { 
    getListAllowedVariablesAction,
    getListAllowedValuessAction,
    postPopulation,
    getPopulation,
    deletePopulation,
    getInformationByVariableConfiguredPopulation
  } = useInitialPopulationActions(dispatch)

  const [idConfiguration, setIdConfiguration] = useState('')
  const [configurationList, setConfigurationList] = useState([])

  const schemaPopuletionConfigure = {
    'variable': '',
    'chain': [],
    'values': {},
    'state':''
  }

  const schemaOptions = {
    variable:{options:[]}
  }

  const [itemsTable,setItemTable]= useState([{...schemaPopuletionConfigure}])
  const [objectRequest,setObjectRequest] = useState(schemaPopuletionConfigure)
  const [chain,setChain] = useState([])
  const [optionsByItem,setOptionsByItem]= useState({
    0:{...Object.assign({}, schemaOptions)}
  })

  const fieldsToTable = {
    headers:[
      {label:'',attr:'consecutive'},
      {label:'Variables to configure',attr:'variable'},     
      {label:'',attr:'actionZoneInitialPopulation'},
    ],
    body:{ 
      consecutive:{
        label:(index)=>{
          return `# ${index}`
        }
      },       
      variable:{        
        type:'select',
        props:{
          name:'variable',
          label:'',
          onDisabled:({itemTable})=>{                        
            return itemTable.state != ''?true:false
          },
          required:true,
          fullWidth:false,
          variant:'outlined',            
          styles:{'padding':'0px'},          
          onChange:({event,indexItemTable,propHeader})=>{            
            const value = event.target ? event.target.value : ''    
            const itemsCopy = [...itemsTable]
            itemsCopy[indexItemTable] = { ...itemsCopy[indexItemTable], [propHeader.attr]:value }  
            setItemTable(itemsCopy)            
          }        
        }           
      },
      actionZoneInitialPopulation:{
        type:'actionZoneInitialPopulation',
        props:{
          options:[    
            {
              onClick: (_,{itemTable,indexItem}) => { 
                setConfigurationList([])
                setChain([])
                if(itemTable.variable!=''){                                    
                  getInformationByVariableConfiguredPopulation(idConfiguration,itemTable.variable).then((responseVariableConfigurated)=>{
                    if(responseVariableConfigurated.data?.data && 
                      responseVariableConfigurated.data?.data?.values && responseVariableConfigurated.data?.data?.values.length>0){
                      const chainToRecord = [itemTable?.variable,...responseVariableConfigurated.data?.data?.chain]
                      generateChain(chainToRecord).then((records)=>{                        
                        let orderChain = []
                        chainToRecord.forEach((itemChaim)=>{
                          const isFind = find(records,{'name':itemChaim})                          
                          orderChain.push(isFind.data)
                        })                        
                        setConfigurationList(orderChain)
                        setChain(responseVariableConfigurated.data?.data?.chain)
                        setGroupsArray(responseVariableConfigurated.data?.data?.values)
                        setObjectRequest({...objectRequest,chain:responseVariableConfigurated.data?.data?.chain,variable:itemTable.variable,values:{}})                        
                        setModalSettings({...modalSettings,open:true,item:itemTable,index:indexItem})
                      })
                      
                    }else{
                      getListAllowedValuessAction(idConfiguration,itemTable?.variable).then((groupInformation)=>{                    
                        const variableNestingList  = groupInformation.data.data.map((variableNesting)=>{ 
                          return {
                            name : variableNesting?.name,
                            value : 0
                          } 
                        })
                        setGroupsArray([])
                        setObjectRequest({...objectRequest,chain:[],variable:itemTable.variable,values:{}})                    
                        setConfigurationList([[...variableNestingList]])
                        setModalSettings({...modalSettings,open:true,item:itemTable,index:indexItem})
                      })
                    }
                  })
                  /* getListAllowedValuessAction(idConfiguration,itemTable?.variable).then((groupInformation)=>{                    
                    const variableNestingList  = groupInformation.data.data.map((variableNesting)=>{ 
                      return {
                        name : variableNesting?.name,
                        value : 0
                      } 
                    })
                    setGroupsArray([])
                    setObjectRequest({...objectRequest,chain:[],variable:itemTable.variable,values:{}})                    
                    setConfigurationList([[...variableNestingList]])
                    setModalSettings({...modalSettings,open:true,item:itemTable,index:indexItem})
                  }) */
                }                
              },
              isCheckable:true,
              className: 'option-button-setting',
              children: SettingsOutlinedIcon,
              validation:(itemValue)=>{
                return itemValue.variable!=''
              }
            },
            {
              onClick: e => console.log(e),
              isCheckable:true,
              className: 'option-button-check',
              children:CheckIcon,
              validation:(itemValue)=>{
                return itemValue.state!=''
              }
            },
            {
              onClick: (_,{itemTable,indexItem}) => {                
                if(itemTable.variable!=''){                          
                  deletePopulation(idConfiguration,itemTable.variable).then(()=>{                    
                    const itemsCopy = [...itemsTable]
                    itemsCopy.splice(indexItem, 1)                  
                    setItemTable(itemsCopy)
                  }).catch(()=>{
                    setShowError(true)
                  })                  
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


  const generateChain = async (chains=[]) => {    
    let newChainToRecord = []
    return  new Promise((resolve,reject) => {
      chains.forEach(async(itemChain) => {         
        const response = await getListAllowedValuessAction(idConfiguration,itemChain).catch(()=>{
          reject({})
        })
        const variableNestingList  = response.data.data.map((variableNesting)=>{ 
          return {
            name : variableNesting?.name,
            value : 0
          } 
        })
        newChainToRecord.push({name:itemChain,data:variableNestingList})
        if (newChainToRecord.length == chains.length) resolve(newChainToRecord)      
      })
    })
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
    if(idConfiguration!='' && optionsByItem[0].variable.options.length == 0){
      getPopulation(idConfiguration).then((response)=>{        
        const arrayToListConfigurated = response.data.data
        if(arrayToListConfigurated.length>0){
          let valuesToOptions={}
          let valuesToItemsTable=[]
          arrayToListConfigurated.map((populationSaved,index)=>{            
            const newOptionByItems =JSON.parse(JSON.stringify(schemaOptions))
            newOptionByItems.variable.options = [{label:populationSaved,value:populationSaved}]
            valuesToOptions[index]=newOptionByItems
            valuesToItemsTable.push({
              'variable': populationSaved,
              'chain': [],
              'values': {},
              'state':'CONFIGURED'
            })            
          })          
          setOptionsByItem({...valuesToOptions})
          setItemTable(valuesToItemsTable)
        }else{
          getListAllowedVariablesAction(idConfiguration).then((response)=>{    
            const newOptionByItems =Object.assign({}, optionsByItem[0])
            newOptionByItems.variable.options = parseInformationOptionsByItem(response.data.data)
            setOptionsByItem({...optionsByItem,[0]:newOptionByItems})
          })
        }     
      })      
    }
  },[idConfiguration])


  const handlerAddOption =()=>{
    const newSchemaOtion = Object.assign({}, schemaOptions)
    getListAllowedVariablesAction(idConfiguration).then((response)=>{
      newSchemaOtion.variable.options = parseInformationOptionsByItem(response.data.data)
      setOptionsByItem({...optionsByItem,[itemsTable.length]:newSchemaOtion})
      setItemTable([...itemsTable,schemaPopuletionConfigure])
    })    
  }

  return {
    idConfiguration,
    fieldsToTable,
    itemsTable,
    optionsByItem,
    configurationList,
    objectRequest,
    chain,
    setObjectRequest,
    setConfigurationList,    
    getListAllowedVariablesAction,
    handlerAddOption,
    setItemTable,
    postPopulation
  }

}