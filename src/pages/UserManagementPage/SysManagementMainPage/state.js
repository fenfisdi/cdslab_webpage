import React, { useContext, useEffect, useState } from 'react'
import { EditorState } from 'draft-js'
import { useStore } from '@store/storeContext'
import { useSysManagementActions } from '@actions/sysManagementActions'
import { SysNotification, SysSimulation } from '../../../components/SysManagement'
import { sysManagementStyles } from './styles'
import SysManagementContext from '../../../context/SysManagement/sysManagementContext'
import TextFieldCommon from '../../../components/ui/TextFieldCommon'

export const useSysManagementState = () => {
  const classes = sysManagementStyles()
  const [isRequired, setIsRequired] = useState(false)
  const [isRequiredMessage, setIsRequiredMessage] = useState('')
  const [ tableData, setTableData ] = useState({
    storage_time: '',
    simulation_removal_before: '',
    simulation_scheduled_removal: ''
  })
  let isValidate = false
  const tableDataKeys = ['storage_time', 'simulation_removal_before', 'simulation_scheduled_removal']
  // const {
  //   state: { sysManagement: { sysManagementTableData, loading } },
  //   dispatch
  // } = useStore()
  // const { loadProcessTimeTableData } = useSysManagementActions(dispatch)

  const sysManagementContext = useContext(SysManagementContext)
  const {
    sysManagementTableData,
    loadProcessTimeTableData,
    updateSysManagementTableDataSuccess,
    updateSysManagementTableDataFailed,
    templateEditorData,
    loadTemplateEditor,
    updateProcessTimeTableData,
    updateSysManagementTemplateEditorSuccess,
    updateSysManagementTemplateEditorFailed,
    createSysManagementTemplateEditorSuccess,
    createSysManagementTemplateEditorFailed,
    updateEditorTemplate,
    createEditorTemplate,
    clearUpdateProcessTimeTableDataSuccess,
    clearUpdateProcessTimeTableDataFailed
  } = sysManagementContext

  const [editorNotificationState, setEditorNotificationState] = useState(
    () => EditorState.createEmpty(),
  )

  const [editorSimulationState, setEditorSimulationState] = useState(
    () => EditorState.createEmpty(),
  )

  useEffect(() => {
    loadProcessTimeTableData()
    loadTemplateEditor()
  }, [])

  console.log(editorNotificationState)

  useEffect(() => {
    handleFillTableData()
  }, [sysManagementTableData])

  useEffect(() => {
    // (templateEditorData)
    // && handleFillTemplateEditor()
  }, [templateEditorData])

  const handleOnChange = ({target}) => {
    const {name, value} = target
    setTableData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFillTemplateEditor = () => {
    setEditorNotificationState((prevState) => ((EditorState.createEmpty(templateEditorData.content))))
  }

  const handleFillTableData = () => {
    setTableData((prevState) => ({
      ...prevState,
      storage_time: sysManagementTableData.storage_time,
      simulation_removal_before: sysManagementTableData.simulation_removal_before,
      simulation_scheduled_removal: sysManagementTableData.simulation_scheduled_removal
    }))
  }

  const handleValidations = () => {
    setIsRequired(false)
    setIsRequiredMessage('')
    if (tableData.simulation_removal_before === '' || tableData.simulation_scheduled_removal === ''
    || tableData.storage_time === '') {
      isValidate = true
      setIsRequired(true)
      setIsRequiredMessage('Hay campos requeridos sin diligenciar')
    }

    if (!isValidate) {
      updateProcessTimeTableData(tableData)
    }
  }

  const handleCloseSnack = () => {
    clearUpdateProcessTimeTableDataSuccess()
    clearUpdateProcessTimeTableDataFailed()
    setIsRequired(false)
  }

  const handleComponent = (item, index) => (
    <TextFieldCommon
      label={''}
      name={tableDataKeys[index]}
      disabled={false}
      value={tableData[tableDataKeys[index]]}
      required={isRequired}
      inputClass={''}
      handleChange={handleOnChange}
    />
  )

  function createData(process, time) {
    return { process, time }
  }
  
  const rows = [
    createData('Maximum storage time', sysManagementTableData.storage_time),
    createData('Notification time before removal', sysManagementTableData.simulation_scheduled_removal),
    createData('Scheduled removal', sysManagementTableData.simulation_removal_before)
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
    tabsComponents,
    updateSysManagementTableDataSuccess,
    updateSysManagementTableDataFailed,
    isRequiredMessage,
    isRequired,
    handleComponent,
    handleValidations,
    handleCloseSnack
  ]
}
