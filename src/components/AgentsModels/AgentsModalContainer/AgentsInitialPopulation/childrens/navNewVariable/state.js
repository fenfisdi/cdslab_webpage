import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useInitialPopulationActions } from '../../../../../../actions/InitialPopulationActions'
import { getStateWithQueryparams } from '../../../../../../pages/CompartmentalModelPage/common'
import { useStore } from '../../../../../../store/storeContext'

const useNavNewVariableState =({eventEmmiter})=>{
  const history = useHistory()
  const {   
    dispatch
  } = useStore()

  const { 
    getListAllowedGroupsAction,
    getListAllowedValuessAction
  } = useInitialPopulationActions(dispatch)

  const [idConfiguration, setIdConfiguration] = useState('')
  const schemaSelectsConfigure = {
    'options':[],
    'value':'',
    onChange:({event,index,itemsCurrent,setItemsCurrent})=>{
      const value = event.target ? event.target.value : ''
      const itemsCopy = [...itemsCurrent]
      itemsCopy[index] = { ...itemsCopy[index], value }
      getListAllowedValuessAction(idConfiguration,value).then((responseAllowedValues)=>{ 
        const dataFilter = responseAllowedValues.data.data
        eventEmmiter(dataFilter)
        setItemsCurrent(itemsCopy)  
      })      
    }
  }

  const [items,setItems]= useState([])

  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])


  useEffect(()=>{
    if(items.length == 0 && idConfiguration!=''){
      addNewGroup()
    }
  },[items,idConfiguration])


  const generateOptions =(options=[])=>{
    return options.map((option)=>{
      return {label:option,value:option}
    })
  }

  const generateVariablesPath =(itemsConfigurated=[])=>{
    let objectConfigurated = ''
    itemsConfigurated.map((variablesConfigurate)=>{
      if(variablesConfigurate.value){
        objectConfigurated = `${objectConfigurated}&variable=${variablesConfigurate.value}`
      }      
    })
    objectConfigurated.indexOf( '&' ) == 0 ? objectConfigurated = objectConfigurated.replace( '&', '?' ) : objectConfigurated
    return objectConfigurated
  }

  const addNewGroup=()=>{
    console.log(':::::::::>items',items)
    const variablesConfigurated = generateVariablesPath(items)
    const newSchemaOtion = Object.assign({}, schemaSelectsConfigure)    
    getListAllowedGroupsAction(idConfiguration,variablesConfigurated).then((response)=>{
      console.log(generateOptions(response.data.data))
      newSchemaOtion.options = generateOptions(response.data.data)
      setItems([...items,newSchemaOtion])
    })        
  }

  const validationNoTnullValueItems =(itemsConfigurated=[])=>{
    let count =0
    itemsConfigurated.map((variablesConfigurate)=>{
      if(variablesConfigurate.value){
        count = count +1
      }      
    })
    return itemsConfigurated.length == count
  }

  return{
    items,
    setItems,
    addNewGroup,
    validationNoTnullValueItems
  }
}

export default useNavNewVariableState