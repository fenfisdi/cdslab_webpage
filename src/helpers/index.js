import { usePath } from '../components/PathContext'

export const usePathBreadCrums = () => {
  const {path, setPath} = usePath()

  const handlePathBreadCrums = (ruta,parameters) => {
    let containsPath = path.find(element => element.name === ruta)
    if(!containsPath){
      if(path){
        const newPath = [...path,{name: ruta,parameters: parameters}]
        handlePathSessionStorage(newPath)
        setPath(newPath)
      }else{
        const newPath = [{name: ruta,parameters: parameters}]
        handlePathSessionStorage(newPath)
        setPath(newPath)
      }
    }
  }

  const handlePathSessionStorage = (newPath) => {
    sessionStorage.setItem('path', JSON.stringify(newPath) )
  }

  return{
    handlePathBreadCrums
  }
}

