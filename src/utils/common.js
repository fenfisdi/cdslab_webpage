export const replaceStringInRange =(string,start,length,substitute)=>{
  return  string.substr(0,start)+substitute+string.substr(length)
}