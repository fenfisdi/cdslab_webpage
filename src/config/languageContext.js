import React, { createContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const languageContext = createContext()

export const LanguageContextProvider = ({children}) =>{

  const { t, i18n } = useTranslation(['Language'])
  const [language, setLanguage] = useState(true)

  const changelanguage = ()=>{
    setLanguage(!language)
    if(language){
      i18n.changeLanguage('es')
    }
    else {
      i18n.changeLanguage('en')
    }
  }

  return(
    <languageContext.Provider value={{
      t,
      language,
      changelanguage
    }}>
      {children}
    </languageContext.Provider>
  )
}


