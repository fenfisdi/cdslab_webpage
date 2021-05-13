import qs from 'qs'

export const getStateWithQueryparams = (queryParams) => {
  if (queryParams && queryParams.location) {
    const {
      location: { search }
    } = queryParams

    return qs.parse(search, {
      ignoreQueryPrefix: true
    })      
  }
}


