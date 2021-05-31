import React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import {useTableHeadStyles} from './styles'

export const TableHeaderComponent=({order, orderBy, onRequestSort, changeAdmin})=>{
  
  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'email', numeric: true, disablePadding: false, label: 'E-mail' },
    { id: 'is_enabled', numeric: true, disablePadding: false, label: `${changeAdmin ? 'Admin' : 'Active'}`},  
  ]
  const classes = useTableHeadStyles()
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell)=>(
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'rigth': 'left'}
            padding={headCell.disablePadding ? 'none': 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {(()=>{
                    if (order=='desc'){
                      return 'sorted descending'
                    }
                  
                    return 'sorted ascending'
                    
                  })}
                </span>
              ): null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )

}