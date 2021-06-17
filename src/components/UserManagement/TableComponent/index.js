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



export const ShowTableComponent = ({setAdmin, fil, rows }) => {

  const classes = useTableComponentStyles()
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('name')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const filterRows = rows?.filter(row=>{
    return row.name.includes(fil)
  })
  
  console.log(rows)
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
    setRowsPerPage(parseInt(event.target.value, 10))
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
              rowCount={filterRows?.length}
              changeAdmin={setAdmin}
            />
            <TableBody>
              {filterRows && stableSort(filterRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  const roleAdmin=()=>{
                    if(row.role=='admin'){
                      return true
                    }
                    else{
                      return false
                    }
                  }

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.email}
                    >
                      
                      <TableCell padding="checkbox">
                      </TableCell>
                      <TableCell component="th" id={index} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{
                        setAdmin ? 
                          <ActiveComponent isActive={roleAdmin()} role={row.role} user={row}/>
                          :<ActiveComponent isActive={row.is_enabled} user={row}/>}
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={filterRows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  )
}