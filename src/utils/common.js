export const replaceStringInRange =(string,start,length,substitute)=>{
  return  string.substr(0,start)+substitute+string.substr(length)
}

export const checkTypePhoneNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key
  if (![8, 9, 35, 36, 37, 39, 46,190].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}