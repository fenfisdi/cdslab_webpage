import {
  BIO_TAKE_PHOTO,
  BIO_REGISTRATION_PHOTO_UPLOADED,
  BIO_ERROR
} from '../../actions/types/biometricTypes'
export const initialState = {
  biometrics: {
    error: null,
    loading: false,
    userImage: null,
    userTestImage: null,
    supplanter: false,
    webcam: null,
    isBiometricallyRegistered: false,
    isWebcamOk: true
  }
}

export const biometricReducer = (state, action) => {
  switch (action.type) {
    case BIO_TAKE_PHOTO:
      return { ...state, userImage: action.payload, error: null, loading: false }
    case BIO_REGISTRATION_PHOTO_UPLOADED:
      return { ...state, isBiometricallyRegistered: true, error: null, loading: false }
    case BIO_ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
