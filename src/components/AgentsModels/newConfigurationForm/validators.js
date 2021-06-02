export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
  'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'validators.minLength'

export const VALIDATORS_NEW_CONFIGURATION_FORM = {

  nameConfiguration: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  simulationInitialDate: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  simulationFinalDate: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  iterationName: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  populationSize: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  boxVerticalSize: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  timeUnits: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  distanceUnits: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
}
