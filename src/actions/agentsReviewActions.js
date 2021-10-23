import { getListAgentsReviewInfoService } from '../services/agentsReviewServices'
import { AGENTS_REVIEW_INFO } from './types/agentsReviewTypes'

export const useAgentsReviewActions = (dispatch) => {
  
  const getListAgentsReviewInfo =(idConfiguration)=>{
    return getListAgentsReviewInfoService(idConfiguration)
  }
  return {
    getListAgentsReviewInfo,
  }
}