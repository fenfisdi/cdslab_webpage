import React from 'react'
import { Table, TitleRow, Row, Content, Input, Title } from './styles'

export default function TableTextInput({ data,columns, onchange }) {
  const titles = columns
  const rows = data

  const clone = items => items.map(item => (Array.isArray(item) ? clone(item) : item))

  const handleInput = (e, idRow, idItem) => {
    const { value } = e.target
    const newRows = clone(rows)
    newRows[idRow][idItem].value = value
    onchange(newRows)
  }

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
      {/* 
      {rows.map((row, idRow) => (
        <Row key={idRow}>
          <Content key={idItem}>{item.content}</Content>
          {row.map((item, idItem) => {
            if (item.type === 'text') {
              return (
                <Content key={idItem}>{item.content}</Content>
              )
            }
            return (
              <Content key={idItem}>
                <Input
                  placeholder={item.placeholder}
                  value={item.value}
                  onChange={(e) => handleInput(e, idRow, idItem)}
                />
              </Content>
            )
          })}
        </Row>
      ))} */}
    </Table>
  )
}

/*
USO:

  const [tabla1, setTabla1] = useState(data1)

  <TableTextInput data={tabla1} onchange={setTabla1} />

  Donde la estructura de la tabla es generada por los datos en data1, como:

  Tenemos un array cons dos sub-arrays, donde el primer array contiene como
  strings los titulos de las columnas y el segundo array la estructura de cada fila.

  Cada fila es un array de objetos, donde tenemos dos tipos de objetos.

  -- De texto:
        {
          type: 'text',
          content: 'parametro1'
        }

  -- Input:
        {
          type: 'input',
          placeholder: 'value',
          value: ''
        }

  Value contiene el valor default del input. De esta forma, un ejemplo de data1 es:

  const data1 = [
  ['title 1', 'title 2', 'title 3'],
  [
    [
      {
        type: 'text',
        content: 'parametro1'
      },
      {
        type: 'input',
        placeholder: 'value',
        value: ''
      },
      {
        type: 'text',
        content: '(units)'
      }
    ],
    [
      {
        type: 'text',
        content: 'parametro1'
      },
      {
        type: 'input',
        placeholder: 'value',
        value: ''
      },
      {
        type: 'text',
        content: '(units)'
      }
    ]
  ]
]

  el valor de los inputs estara disponible dentro de la constante definida con el useState.
*/