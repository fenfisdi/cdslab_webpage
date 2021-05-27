import * as Types from '../types'

export default (state, { type, payload }) => {
  switch (type) {
  case Types.LOAD_SYS_MANAGEMENT_TABLE_DATA:
    return {
      ...state,
      sysManagementTableData: payload
    }

  case Types.UPDATE_SYS_MANAGEMENT_TABLE_DATA_SUCCESS:
    return {
      ...state,
      updateSysManagementTableDataSuccess: payload
    }

  case Types.UPDATE_SYS_MANAGEMENT_TABLE_DATA_FAILED:
    return {
      ...state,
      updateSysManagementTableDataFailed: payload
    }

  case Types.LOAD_SYS_MANAGEMENT_TEMPLATE_EDITOR:
    return {
      ...state,
      templateEditorData: payload
    }

  case Types.UPDATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_SUCCESS:
    return {
      ...state,
      updateSysManagementTemplateEditorSuccess: payload
    }

  case Types.UPDATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_FAILED:
    return {
      ...state,
      updateSysManagementTemplateEditorFailed: payload
    }

  case Types.CREATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_SUCCESS:
    return {
      ...state,
      createSysManagementTemplateEditorSuccess: payload
    }

  case Types.CREATE_SYS_MANAGEMENT_TEMPLATE_EDITOR_FAILED:
    return {
      ...state,
      createSysManagementTemplateEditorFailed: payload
    }

  default:
    return state
  }
}