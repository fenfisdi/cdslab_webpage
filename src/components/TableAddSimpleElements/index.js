import React, { useState } from 'react'
import { ColumnTitle, TableContainer, TableCell, TableRow, TableHeaderRow } from './styles'
import { TextField } from '@material-ui/core'
import { Button } from '../ui/Buttons'

const DynamicTable = ({ initialItems, columns, callback }) => {
  const [items, setItems] = useState(initialItems)

  React.useEffect(() => {
    renderRows()
    console.log('items changed')
  }, [items])

  const handleClick = () => {
    const its = [...items]
    const itemEmpty = {}
    columns.forEach(column => {
      itemEmpty[column.att] = ''
    })
    its.push(itemEmpty)

    setItems(its)
  }

  const handleItemChanged = (i, event) => {
    const its = [...items]
    its[i] = { ...its[i], [event.target.name]: event.target.value }
    setItems(its)
  }

  const handleItemDeleted = (i) => {
    const its = [...items]

    its.splice(i, 1)

    setItems(its)
  }

  const renderRows = () => (
    items.map((item, i) => (
      <TableRow key={'item-' + i}>
        {columns.map((column, j) => (
          <TableCell key={'cell-' + j}>
            <TextField
              type={column.type}
              name={column.att}
              value={item[column.att]}
              onChange={(event) => handleItemChanged(i, event)}
            />
          </TableCell>
        ))}

        {items.length > 1 &&
          <TableCell>
            <button
              onClick={() => handleItemDeleted(i)}
            >
              Delete
            </button>
          </TableCell>}

      </TableRow>
    )
    )
  )

  const fillTableHeader = () => {
    return (
      <TableHeaderRow>
        {columns.map((column, i) => (
          <ColumnTitle key={'title-' + i}>{column.title}</ColumnTitle>
        ))}
        {items.length > 1 && (
          <ColumnTitle>Action</ColumnTitle>
        )}

      </TableHeaderRow>
    )
  }

  return (
    <div>
      <TableContainer>
        {fillTableHeader()}
        {renderRows()}

      </TableContainer>
      <hr />

      <Button
        onClick={handleClick}
        color='primary'
      >
        Add
      </Button>
    </div>
  )
}

export default DynamicTable
