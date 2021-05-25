import request from '../httpClient/api.request'

export const getProcessTimeTableData = async () => {
  return request(
    `${process.env.REACT_APP_MANAGEMENT}/configuration`,
    'GET'
  )
}

export const updateTimeProcessTableData = async (tableData) => {
  return request(
    `${process.env.REACT_APP_MANAGEMENT}/configuration`,
    'PUT',
    tableData
  )
}

export const getTemplateEditor = async () => {
  return request(
    `${process.env.REACT_APP_MANAGEMENT}/email/template`,
    'GET'
  )
}

export const sendNotificationEmail = async (emailData) => {
  return request(
    `${process.env.REACT_APP_MANAGEMENT}/email/notification`,
    'POST',
    emailData
  )
}

export const updateTemplateEditor = async (emailData) => {
  return request(
    `${process.env.REACT_APP_MANAGEMENT}/email/template`,
    'PUT',
    emailData
  )
}