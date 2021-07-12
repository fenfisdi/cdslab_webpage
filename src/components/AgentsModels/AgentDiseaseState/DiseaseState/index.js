
import { Grid } from '@material-ui/core'
import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

export default function TableObjDinamic({tableFields}) {
  console.log(':::::::::::::::::::::>tableFields',tableFields)
  const classes = useStyles()
  return (
    <Grid container item xs={12} direction="column" justify='center' alignItems='center'>
      <Grid container item xs={10} direction="column" justify='center' alignItems='center'>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {tableFields?.headers?.map((header,index) => (
                  <StyledTableCell align="center" key={index}>{header.label}</StyledTableCell>
                ))}               
              </TableRow>
            </TableHead>
            <TableBody>
              {tableFields?.body?.map((rowBody,indexBody) => {
                return (<StyledTableRow key={indexBody}>
                  {tableFields?.headers?.map((rowHeader,indexHeader)=>{
                    console.log(':rowBody[rowHeader]',rowHeader)
                    console.log('::rowBody',rowBody)
                    
                    return(                                          
                      <StyledTableCell align="center" key={indexHeader}>{rowBody[rowHeader.attr]}</StyledTableCell>                                          
                    )
                  })}
                </StyledTableRow>)
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>                  
    </Grid>
  )
}