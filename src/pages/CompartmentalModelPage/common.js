import qs from 'qs'

export const getStateWithQueryparams = (queryParams) => {
  if (queryParams && queryParams.location) {
    const {
      location: { search }
    } = queryParams

    const params = qs.parse(search, {
      ignoreQueryPrefix: true
    })      
    return params
  }
}


