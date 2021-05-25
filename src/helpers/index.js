import { usePath } from '../components/PathContext'

export const usePathBreadCrums = () => {
  const [path, setPath] = usePath()

  const handlePathBreadCrums = (ruta) => {
    if(path){
      const newPath = [...path,{name: ruta}]
      handlePathSessionStorage(newPath)
      setPath(newPath)
    }else{
      const newPath = [{name: ruta}]
      handlePathSessionStorage(newPath)
      setPath(newPath)
    }
  }

  const handlePathSessionStorage = (newPath) => {
    sessionStorage.setItem('path', JSON.stringify(newPath) )
  }

  return{
    handlePathBreadCrums
  }
}

