import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { IconButton } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#CFD8DC',
    color: 'black',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(() => ({
  root: {
    background:'#F5F6F7',
    marginBottom:'40px',
    '& > td':{
      border:'0px'
    }
  },
}))(TableRow)


const useStyles = makeStyles({
  table: {
    minWidth: 700,    
    'border-collapse': 'separate',
    'border-spacing': '0 10px',       
  },
})

const QuarantineTable = ({dataInfo,handlerConfiguration}) => {
  const classes = useStyles()

  return (
    <TableContainer style={{marginBottom:'40px'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="lefth">Quarantine Groups</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {dataInfo.map((row) => (
            <StyledTableRow key={row.name}>

              <StyledTableCell component="th" align="lefth" scope="row">
                {row.name}
              </StyledTableCell>

              <StyledTableCell align="right">
                <IconButton
                  disabled={false}
                  onClick={() => handlerConfiguration({configuration:row})}
                  color="primary"
                  aria-label="Sttings"
                  component="span"
                >
                  <SettingsOutlinedIcon />
                </IconButton>

                <IconButton
                  disabled={!(row.state == 'CONFIGURED')}
                  color="primary"
                  aria-label="Sttings"
                  component="span"
                >
                  <CheckIcon />
                </IconButton>

              </StyledTableCell> 

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default QuarantineTable