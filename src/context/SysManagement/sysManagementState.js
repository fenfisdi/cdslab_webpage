import React, { useReducer } from 'react'
import { getProcessTimeTableData, updateTimeProcessTableData, getTemplateEditor, updateTemplateEditor, sendNotificationEmail } from '../../services/sysManagementServices'
import * as Types from '../types'
import SysManagementContext from './sysManagementContext'
import SysManagementReducer from './sysManagementReducer'

const SysManagementState = (props) => {
  const initialState = {
    sysManagementTableData: '',
    updateSysManagementTableDataSuccess: false,
    updateSysManagementTableDataFailed: false,
    templateEditorData: '',
    updateSysManagementTemplateEditorSuccess: false,
    updateSysManagementTemplateEditorFailed: false,
    createSysManagementTemplateEditorSuccess: false,
    createSysManagementTemplateEditorFailed: false
  }

  const [state, dispatch] = useReducer(SysManagementReducer, initialState)

  const loadProcessTimeTableData = () => {
    getProcessTimeTableData()
      .then((response) => {
        dispatch({
          type: Types.LOAD_SYS_MANAGEMENT_TABLE_DATA,
          payload: response.data.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateProcessTimeTableData = ( tableData ) => {
    updateTimeProcessTableData( tableData )
      .then((response) => {
        dispatch({
          type: Types.UPDATE_SYS_MANAGEMENT_TABLE_DATA_SUCCESS,
          payload: true
        })
      })
      .catch((error) => {
        dispatch({
          type: Types.UPDATE_SYS_MANAGEMENT_TABLE_DATA_FAILED,
          payload: true
        })
      })
  }

  const clearUpdateProcessTimeTableDataSuccess = () => {
    dispatch({
      type: Types.UPDATE_SYS_MANAGEMENT_TABLE_DATA_SUCCESS,
      payload: false
    })
  }

  const clearUpdateProcessTimeTableDataFailed = () => {
    dispatch({
      type: Types.UPDATE_SYS_MANAGEMENT_TABLE_DATA_FAILED,
      payload: false
    })
  }

  const loadTemplateEditor = () => {
    getTemplateEditor()
      .then((response) => {
        dispatch({
          type: Types.LOAD_SYS_MANAGEMENT_TEMPLATE_EDITOR,
          payload: response.data.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateEditorTemplate = ( emailData ) => {
    updateTemplateEditor( emailData )
      .then((response) => {
        dispatch({
          type: Types.UPDATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_SUCCESS,
          payload: true
        })
      })
      .catch((error) => {
        dispatch({
          type: Types.UPDATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_FAILED,
          payload: true
        })
      })
  }

  const updateEditorTemplateSuccess = () => {
    dispatch({
      type: Types.UPDATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_SUCCESS,
      payload: false
    })
  }

  const updateEditorTemplateFailed = () => {
    dispatch({
      type: Types.UPDATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_FAILED,
      payload: false
    })
  }

  const createEditorTemplate = ( emailData ) => {
    sendNotificationEmail( emailData )
      .then((response) => {
        dispatch({
          type: Types.CREATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_SUCCESS,
          payload: true
        })
      })
      .catch((error) => {
        dispatch({
          type: Types.CREATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_FAILED,
          payload: true
        })
      })
  }

  return (
    <SysManagementContext.Provider
      value={{
        sysManagementTableData: state.sysManagementTableData,
        updateSysManagementTableDataSuccess: state.updateSysManagementTableDataSuccess,
        updateSysManagementTableDataFailed: state.updateSysManagementTableDataFailed,
        templateEditorData: state.templateEditorData,
        updateSysManagementTemplateEditorSuccess: state.updateSysManagementTemplateEditorSuccess,
        updateSysManagementTemplateEditorFailed: state.updateSysManagementTemplateEditorFailed,
        createSysManagementTemplateEditorSuccess: state.createSysManagementTemplateEditorSuccess,
        createSysManagementTemplateEditorFailed: state.createSysManagementTemplateEditorFailed,
        loadProcessTimeTableData,
        updateProcessTimeTableData,
        loadTemplateEditor,
        updateEditorTemplate,
        createEditorTemplate,
        clearUpdateProcessTimeTableDataSuccess,
        clearUpdateProcessTimeTableDataFailed,
        updateEditorTemplateSuccess,
        updateEditorTemplateFailed
      }}
    >
      {props.children}
    </SysManagementContext.Provider>
  )
}

export default SysManagementState