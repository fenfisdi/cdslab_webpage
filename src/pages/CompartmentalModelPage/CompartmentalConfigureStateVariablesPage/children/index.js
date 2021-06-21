
import React, {useContext} from 'react' 
import {ParametersFormHeader, ParametersFormHeaderItem} from './styles'
import {languageContext} from '../../../../config/languageContext'

const ConfigureStateVariablesHeader =()=>{

  const {t} = useContext(languageContext)
  
  return (
    
    <ParametersFormHeader>
      <ParametersFormHeaderItem justifyContent="flex-end" alignItems="center">
        <strong>{t('configureInitialVaulesPage.state')}</strong>
      </ParametersFormHeaderItem>
      <ParametersFormHeaderItem justifyContent="center" alignItems="center">
        <strong>{t('configureInitialVaulesPage.value')}</strong>      
      </ParametersFormHeaderItem>
      <ParametersFormHeaderItem justifyContent="flex-start" alignItems="center">
        <strong>{t('configureInitialVaulesPage.units')}</strong>
      </ParametersFormHeaderItem>
    </ParametersFormHeader>
  )

}

export default ConfigureStateVariablesHeader