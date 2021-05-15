import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import ActiveComponent from '../SwitchComponent/index'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'E-mail', minWidth: 100 },
  { id: 'active', label: 'Active', minWidth: 100 },
]

function createData(name, email, active) {
  
  return { name, email, active}
}

const rows = [
  createData('Andrea', 'andrea@example.com', true),
  createData('Victoria', 'victoria@example.com', true),
  createData('Clara', 'clara@example.com', true),
  createData('Diana', 'diana@example.com', true),
  createData('Alejandro', 'zico@example.com', true),
  createData('Ramiro', 'ramiro@example.com', true),
  createData('Santiago', 'santiago@example.com', true),
  createData('Edgar', 'edgar@example.com', true),
  createData('Camilo', 'camilo@example.com', true),
  createData('Johan', 'johan@example.com', true),
  createData('kiiron', 'kiiron@example.com', true),
  createData('Sasha', 'sasha@example.com', true),
  createData('Odin', 'odin@example.com', true),
  createData('Dasha', 'dasha@example.com', true),
  createData('Lola', 'lola@example.com', true),
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

export default function ShowTableComponent() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {typeof value === 'boolean' ? <ActiveComponent/> : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}