/**
 * Chel value min length
 * @param {string} value
 * @param {number} minValue  Min value
 */
export const checkMinLength = (value, minValue) => {
  return !(value.length <= minValue)
}
/**
 * Check value max length
 * @param {string} value
 * @param {number} maxValue Max value
 */
export const checkMaxLength = (value, maxValue) => {
  return !(value.length >= maxValue)
}
/**
 * Check valid pattern
 * @param {string} value
 * @param {RegExp} pattern
 */
export const checkPattern = (value, pattern) => {
  return pattern.test(value)
}
/**
 * Check max value
 * @param {string} value
 * @param {number} maxValue Max value
 */
 export const checkMaxValue = (value, maxValue) => {
   if(!value){
    value = 0;
  }
  return !(value >= maxValue)
}
/**
 * Check min value
 * @param {string} value
 * @param {number} minValue min value
 */
 export const checkMinValue = (value, minValue) => {
   if(!value){
     value = 0;
   }
  return !(value < minValue)
}
