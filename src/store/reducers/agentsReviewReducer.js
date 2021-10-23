
import { AGENTS_REVIEW_INFO } from '../../actions/types/agentsReviewTypes'


export const initialState = {
  agentsReview: {
    data:[],
    error:false,
    loading: false
  }
}

export const agentsReviewReducer = (state, action) => {
  switch (action.type) { 
    
  case AGENTS_REVIEW_INFO:
    return {
      ...state, 
      loading: false, 
      data: action.payload.data,
      error:false
    }

  default:
    return state
  }
}
