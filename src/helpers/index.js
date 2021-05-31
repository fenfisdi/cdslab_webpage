import { usePath } from '../components/PathContext'

export const usePathBreadCrums = () => {
  const {path, setPath} = usePath()

  const handlePathBreadCrums = (breadCrumbRoute,name,parameters) => {
    let containsPath = path.find(element => element.breadCrumbRoute === breadCrumbRoute)
    if(!containsPath){
      if(path){
        const newPath = [...path,{name: name,breadCrumbRoute: breadCrumbRoute,parameters: parameters}]
        handlePathSessionStorage(newPath)
        setPath(newPath)
      }else{
        const newPath = [{name: name,breadCrumbRoute: breadCrumbRoute,parameters: parameters}]
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

