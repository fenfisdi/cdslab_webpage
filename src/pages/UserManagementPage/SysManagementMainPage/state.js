import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import { SysNotification, SysSimulation } from '../../../components/SysManagement'
import { sysManagementStyles } from './styles'

export const useSysManagementState = () => {
  const classes = sysManagementStyles()
  const [editorNotificationState, setEditorNotificationState] = useState(
    () => EditorState.createEmpty(),
  )

  const [editorSimulationState, setEditorSimulationState] = useState(
    () => EditorState.createEmpty(),
  )

  function createData(process, time) {
    return { process, time }
  }
  
  const rows = [
    createData('Maximum storage time', 30),
    createData('Notification time before removal', 5),
    createData('Scheduled removal', 1)
  ]

  const titles = ['Process', 'Time(days)']

  const tabsComponents = [
    () =>
      <SysNotification
        classes={classes}
        editorState={editorNotificationState}
        setEditorState={setEditorNotificationState}
      />,
    () => 
      <SysSimulation
        classes={classes}
        editorState={editorSimulationState}
        setEditorState={setEditorSimulationState}
      />
  ]

  return [
    classes,
    rows,
    titles,
    tabsComponents
  ]
}
