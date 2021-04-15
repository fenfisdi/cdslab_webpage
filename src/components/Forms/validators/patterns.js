export const PATTERN_EMAIL = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$/
)
export const PATTERN_ALPHANUMERIC_SIGNS = new RegExp(
  /^[(\r\n|\r|\n)-?¿!¡():,%´°ºª&*.`~"<>{}^_'+#@[\]\s a-zA-Z0-9\u00C0-\u00FF\s]+$/
)
export const PATTERN_ALPHANUMERIC = new RegExp(
  /^[-. a-zA-Z0-9\u00C0-\u00FF\s]+$/
)
export const PATTERN_SEMESTER = new RegExp(/^[0-9]+-[1-2]{1}$/)
export const PATTERN_NUMERIC = new RegExp(/^([0-9]){1,}$/)
export const PATTERN_RANGE = new RegExp(/^[0-9]+-[0-9]+$/)
export const PATTERN_ALFANUMERICO_SIN_ACENTOS = new RegExp(
  /^[-_?¿!¡()& a-zA-Z0-9\s]+$/
)
export const PATTERN_PHONE_NUMBER = new RegExp(
  /\+(9[976]\d|8[987530]\d|6[987]\d|5[907]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/
)

export const PATTERN_REALS_NUMERIC = new RegExp(/^-?[0-9]\d*(\.\d+)?$/)
