import React from 'react'
import { Table, TitleRow, Row, Content, Title } from './styles'

export default function TableTextInput({ data,columns }) {
  const titles = columns
  const rows = data

  

  return (
    <Table>
      <TitleRow>
        {titles.map((title, id) => (
          <Title key={id}>{title}</Title>
        ))}
      </TitleRow>

      {Object.keys(rows).map((fieldType,index)=>{
        const {label,type, input} = rows[fieldType]
        return <Row key={index}>
          <Content >{label}</Content>
          <Content>{type}</Content>
          <Content>
            {input}
          </Content>
        </Row>
      })}   
    </Table>
  )
}