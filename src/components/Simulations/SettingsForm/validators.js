import {
  checkMinLength,
  checkMaxLength,
  checkPattern,
  checkMaxValue,
  checkMinValue
} from '../../Forms/validators/validatorsCheks'
import { PATTERN_ALPHANUMERIC_SIGNS, PATTERN_NUMERIC } from '../../Forms/validators/patterns'

export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ALPHANUMERIC_ERROR_MESSAGE = 'Numeric characters are allowed.'
export const PATTERN_NUMERIC_ERROR_MESSAGE = 'Alphanumeric characters are allowed.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
export const MIN_VALUE_MESSAGE = 'The minimum value allowed is ?.'
export const MAX_VALUE_MESSAGE = 'The maximum value allowed is ?.'

export const VALIDATORS_SIMULATION_SETTINGS = {
  name: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'pattern',
      message: PATTERN_ALPHANUMERIC_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_ALPHANUMERIC_SIGNS
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE.replace('?', 100),
      check: checkMaxLength,
      valueToCheck: 100
    }
  ],
  simulationDate: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    }
  ],
  populationSize: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'pattern',
      message: PATTERN_ALPHANUMERIC_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_NUMERIC
    },
    {
      type: 'maxValue',
      message: MAX_VALUE_MESSAGE.replace('?', 1000000),
      check: checkMaxValue,
      valueToCheck: 1000000
    },
    {
      type: 'minValue',
      message: MIN_VALUE_MESSAGE.replace('?', 30),
      check: checkMinValue,
      valueToCheck: 30
    }
  ],
  iterationTime: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'pattern',
      message: PATTERN_ALPHANUMERIC_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_NUMERIC
    },
    {
      type: 'maxValue',
      message: MAX_VALUE_MESSAGE.replace('?', 1000000),
      check: checkMaxValue,
      valueToCheck: 1000000
    },
    {
      type: 'minValue',
      message: MIN_VALUE_MESSAGE.replace('?', 30),
      check: checkMinValue,
      valueToCheck: 30
    }
  ],
  iterationsNumber: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'pattern',
      message: PATTERN_ALPHANUMERIC_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_NUMERIC
    },
    {
      type: 'maxValue',
      message: MAX_VALUE_MESSAGE.replace('?', 1000000),
      check: checkMaxValue,
      valueToCheck: 1000000
    },
    {
      type: 'minValue',
      message: MIN_VALUE_MESSAGE.replace('?', 30),
      check: checkMinValue,
      valueToCheck: 30
    }
  ],
  boxSizeHorizontal: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'pattern',
      message: PATTERN_ALPHANUMERIC_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_NUMERIC
    },
    {
      type: 'maxValue',
      message: MAX_VALUE_MESSAGE.replace('?', 10),
      check: checkMaxValue,
      valueToCheck: 10
    },
    {
      type: 'minValue',
      message: MIN_VALUE_MESSAGE.replace('?', 0),
      check: checkMinValue,
      valueToCheck: 0
    }
  ],
  boxSizeVertical: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'pattern',
      message: PATTERN_ALPHANUMERIC_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_NUMERIC
    },
    {
      type: 'maxValue',
      message: MAX_VALUE_MESSAGE.replace('?', 10),
      check: checkMaxValue,
      valueToCheck: 10
    },
    {
      type: 'minValue',
      message: MIN_VALUE_MESSAGE.replace('?', 0),
      check: checkMinValue,
      valueToCheck: 0
    }
  ],
}
