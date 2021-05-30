import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { ActiveComponent } from './SwitchComponent/index'
import { TableHeaderComponent } from './TableHeadComponent/index'
import { useTableComponentStyles } from './styles'
import {useTableComponentState} from './state'

/* function createData(name, email, active) {
  return { name, email, active }
}

const rows = [
  createData('Andrea', 'andrea@example.com', false),
  createData('Victoria', 'victoria@example.com', true),
  createData('Clara', 'clara@example.com', true),
  createData('Diana', 'diana@example.com', true),
  createData('Alejandro', 'Alejandro@example.com', true),
  createData('Ramiro', 'ramiro@example.com', false),
  createData('Santiago', 'santiago@example.com', true),
  createData('Edgar', 'edgar@example.com', true),
  createData('Camilo', 'camilo@example.com', true),
  createData('Johan', 'johan@example.com', false),
  createData('Kiiron', 'kiiron@example.com', true),
  createData('Sasha', 'sasha@example.com', true),
  createData('Odin', 'odin@example.com', true),
  createData('Dasha', 'dasha@example.com', false),
  createData('Lola', 'lola@example.com', true),
  
] */

export const ShowTableComponent = ({configAdmin, fil, rows }) => {

  const classes = useTableComponentStyles()
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('name')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const filterRows = rows && rows.filter(row=>{
    return row.name.includes(fil)
  })

  const functionsTable = useTableComponentState()
  const {
    getComparator,
    stableSort
  }=functionsTable

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5))
    setPage(0)
  }

  return (
    <Grid className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <TableHeaderComponent
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows && filterRows.length}
              changeAdmin={configAdmin}
            />
            <TableBody>
              {rows && stableSort(filterRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell padding="checkbox">
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left"><ActiveComponent isActive={row.is_enabled} list={rows}/></TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={rows && rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  )
}