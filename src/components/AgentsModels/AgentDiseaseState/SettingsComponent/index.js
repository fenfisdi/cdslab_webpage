import React from 'react'
import { Button } from '../../../ui/Buttons'

export default function SettingsComponent({ handleClose, item }) {
  const onFinishSettings = () => {
    const itemCopy = { ...item }
    itemCopy.state = 'CONFIGURED'
    itemCopy.distribution = {
      value1: 'uno',
      value2: 'dos'
    }
    handleClose(itemCopy)
  }

  const onClose = () => {
    const itemCopy = { ...item }
    itemCopy.state = ''
    handleClose(itemCopy)
  }

  return (
    <div>
      <p>I am the settings component for {item?.name}</p>

      <Button onClick={() => onFinishSettings()}>Save and finish</Button>
      <Button onClick={() => onClose()}>Cancel</Button>
    </div>
  )
}
