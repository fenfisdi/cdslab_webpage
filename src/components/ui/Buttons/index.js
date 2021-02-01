import React from 'react'
import { NormalButton } from './styles'

export const Button = (props) => {
  return (
    <NormalButton
      {...props}
    >
      {props.children}
    </NormalButton>
  )
}
