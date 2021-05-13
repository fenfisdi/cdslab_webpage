import React from 'react'
import FullWidthTabs from '../../../components/Taps'
import { CompartmentalMainPageContent } from './compartmentalMainPageContent'
import { CompartmentalMainPageContainer } from './styles'

const CompartmentalMainPage = () => {

  
  const tabs = [
    {
      label: 'Compartmental',
      content:  <CompartmentalMainPageContent />,
      disabled : false
    },
    {
      label: 'Agents',
      content: <CompartmentalMainPageContent />,
      disabled : true
    },
  ]
  return (
    <>
      <CompartmentalMainPageContainer>
        <FullWidthTabs tabs={tabs} />
      </CompartmentalMainPageContainer>
    </>
  )
}

export default CompartmentalMainPage
