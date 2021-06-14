import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  tableCell: {
    'border':'1px  solid #cebaba',
    '&.red':{
      color:'red'
    }
  },
  TableContainer:{
    overflow: 'visible',
    marginTop:'30px'
  }
})


export default function TableFormatDynamic({headersTable=[],dataTable=[],useLabel=false}) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.TableContainer}>
      <Table>        
        <TableHead> 
          <TableRow >
            {headersTable.map((row,index) => (            
              <TableCell key={useLabel? `${row.label}header${index}`: `${row.name}header${index}`} align="center" className={classes.tableCell}>
                {useLabel ? row.label: row.name}
              </TableCell>            
            ))}     
          </TableRow>       
        </TableHead>
        <TableBody>
          {dataTable.map((row,index) => (
            <TableRow key={`body${index}`}>
              {headersTable.map((header)=>(
                <TableCell key={`${header.name}body_cell`}align="center" className={classes.tableCell}>
                  {row[header.name]}
                </TableCell>                          
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
