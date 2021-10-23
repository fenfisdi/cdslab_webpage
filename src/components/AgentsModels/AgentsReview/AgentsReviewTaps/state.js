import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAgentsReviewActions } from '../../../../actions/agentsReviewActions'
import { getStateWithQueryparams } from '../../../../pages/CompartmentalModelPage/common'
import { useStore } from '../../../../store/storeContext'

export const useAgentsReview = () => {

  const [data, setData] = useState([])

  const history = useHistory()
  const [idConfiguration, setIdConfiguration] = useState('')

  const{
    getListAgentsReviewInfo
  } = useAgentsReviewActions()

  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])

  useEffect(()=>{   
    getInfoAgentsReview(idConfiguration)
  },[data,idConfiguration])

  const getInfoAgentsReview = (id) => {
    if(data.length === 0 && id != null){
      getListAgentsReviewInfo(id).then((response) => {
        setData(response.data.data)
      })
    }
  }

  return {
    data
  }
}