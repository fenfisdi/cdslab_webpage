import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SAVE
} from '../../actions/types/registerTypes'

export const initialState = {
  register: {
    data: null,
    loading: false,
    error: null
  }
}

export const registerReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return { ...state, loading: true, error: null, data: null }
    case REGISTER_ERROR:
      return { ...state, loading: false, error: action.payload }
    case REGISTER_SAVE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}
