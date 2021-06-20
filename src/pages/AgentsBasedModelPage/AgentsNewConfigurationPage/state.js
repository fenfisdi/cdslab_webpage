import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { useConfigurationActions } from '../../../actions/configurationActions'
import { useStore } from '../../../store/storeContext'

export const useAgentsModelsPageState = ({ showSnack, setShowSnack }) => {

  const {
    state: {
      configuration: { data,listConfigurationDistance,listConfigurationTime, loading,error }
    },
    dispatch
  } = useStore()

  const { 
    getListConfigurationDistance,
    getListConfigurationTime,
    addConfiguration,
  } = useConfigurationActions(dispatch)

  useEffect(() => {
    if (listConfigurationDistance.length == 0) { 
      getListConfigurationDistance()
    }
    if (listConfigurationTime.length == 0) { 
      getListConfigurationTime()
    }
  }, [listConfigurationDistance])

  useEffect(() => {
    if (!isEmpty(data)) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          successMessage: 'create configuration successfully.',
          error: false
        }
      )
    } 
  }, [data])

  useEffect(() => {
    if (error) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: 'error create configuration'
        }
      )
    }
  }, [error])

  const eventEmitter = (formValues) => {
    addConfiguration(formValues)
  }


  return {
    listConfigurationDistance,
    listConfigurationTime,
    eventEmitter,
    loading
  }
}