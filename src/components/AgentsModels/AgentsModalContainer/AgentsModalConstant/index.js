import React from 'react'
import { Button } from '../../../ui/Buttons'

export const AgentsModalConstant = ({ modalSettings, setComponentChildren }) => {
  
  const handleGoBack = () =>{
    setComponentChildren('Distribution')
  }
  
  const handleSaveInformation =(item)=>{
    console.log(item)
  }
  
  return (
    <div>
      <p> Empirical <strong>{modalSettings?.item?.name}</strong></p>
      <h1>Empirical</h1>
      <Button onClick={() => handleSaveInformation(modalSettings?.item)}>Save and finish</Button>
      <Button onClick={() => handleGoBack()}>Cancel</Button>
    </div>
  )
}
