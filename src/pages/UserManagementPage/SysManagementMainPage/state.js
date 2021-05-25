import React, { useContext, useEffect, useState } from 'react'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
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
    updateEditorTemplate,
    clearUpdateProcessTimeTableDataSuccess,
    clearUpdateProcessTimeTableDataFailed,
    updateEditorTemplateSuccess,
    updateEditorTemplateFailed
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

  useEffect(() => {
    handleFillTableData()
  }, [sysManagementTableData])

  useEffect(() => {
    (templateEditorData)
    && handleFillTemplateEditor()
  }, [templateEditorData])

  // => template Editor handle
  const handleFillTemplateEditor = () => {
    const blocksFromHTML = convertFromRaw(JSON.parse(templateEditorData.content))
    setEditorNotificationState(() => EditorState.createWithContent(blocksFromHTML))
  }
  // => template Editor handle

  // => form handles
  const handleOnChange = ({target}) => {
    const {name, value} = target
    setTableData((prevState) => ({
      ...prevState,
      [name]: value
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

    if (!editorNotificationState.getCurrentContent().hasText() &&
    !editorSimulationState.getCurrentContent().hasText()) {
      isValidate = true
      setIsRequired(true)
      setIsRequiredMessage('Hay campos requeridos sin diligenciar')
    }

    if (!isValidate) {
      updateProcessTimeTableData(tableData)
      updateEditorTemplate({
        name: 'Notification',
        content: JSON.stringify(convertToRaw(editorNotificationState.getCurrentContent()))
      })
    }
  }
  // => form handles

  const handleCloseSnack = () => {
    clearUpdateProcessTimeTableDataSuccess()
    clearUpdateProcessTimeTableDataFailed()
    updateEditorTemplateSuccess()
    updateEditorTemplateFailed()
    setIsRequired(false)
  }

  // => table handles and data
  const handleFillTableData = () => {
    setTableData((prevState) => ({
      ...prevState,
      storage_time: sysManagementTableData.storage_time,
      simulation_removal_before: sysManagementTableData.simulation_removal_before,
      simulation_scheduled_removal: sysManagementTableData.simulation_scheduled_removal
    }))
  }

  const handleComponentForTable = (item, index) => (
    <TextFieldCommon
      label={''}
      name={tableDataKeys[index]}
      disabled={false}
      value={tableData[tableDataKeys[index]]}
      required={isRequired}
      inputClass={classes.inputClass}
      handleChange={handleOnChange}
    />
  )

  function createTableData(process, time) {
    return { process, time }
  }
  
  const tableRows = [
    createTableData('Maximum storage time', sysManagementTableData.storage_time),
    createTableData('Notification time before removal', sysManagementTableData.simulation_scheduled_removal),
    createTableData('Scheduled removal', sysManagementTableData.simulation_removal_before)
  ]

  const tableTitles = ['Process', 'Time(days)']
  // => table handles and data

  // => tabs data
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
  // => tabs data

  return [
    classes,
    tableRows,
    tableTitles,
    tabsComponents,
    updateSysManagementTableDataSuccess,
    updateSysManagementTableDataFailed,
    isRequiredMessage,
    isRequired,
    updateSysManagementTemplateEditorSuccess,
    updateSysManagementTemplateEditorFailed,
    handleComponentForTable,
    handleValidations,
    handleCloseSnack
  ]
}
