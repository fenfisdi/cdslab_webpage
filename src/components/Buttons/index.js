import React from 'react'
import { FaFileUpload } from 'react-icons/fa'
import { Button } from './styles'

export const LoadingButton = ({
  id,
  onClick,
  canDisplay = true,
  color = '#fff',
  background = '#6c9a06',
  size = '20px',
  text,
  className
}) => {
  return (
    <Button
      onClick={() => onClick()}
      canDisplay={canDisplay}
      background={background}
      className={className}
    >
      <FaFileUpload size={size} color={color} />
      {text}
    </Button>
  )
}
