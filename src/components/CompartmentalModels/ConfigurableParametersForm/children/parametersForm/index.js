import React, { useState, Fragment } from 'react'
import { SelectComponent } from '../../../../ui/Select'
import ExtraParameters from '../extraParameters'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { ParametersFormBodyItem } from './styles'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    'border-collapse': 'separate',
    'border-spacing': '0 10px'    
  },
})

const StyledTableRow = withStyles(() => ({
  root: {
    background:'#ECEFF1',
    marginBottom:'10px',
    '& > td':{
      border:'0px'
    }
  },
}))(TableRow)


const ParametersForm = ({parameters,fieldsParametersForm}) => {
  const classes = useStyles()
  return (
    <TableContainer >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead style={{  background:'#CFD8DC'}}>
          <TableRow>
            <TableCell align="center">Parameter</TableCell>
            <TableCell align="center">Configuration Type</TableCell>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center">Units</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {parameters && parameters.map((parameter,index)=> {
            const { label, unit, representation } = parameter
            const { value } = fieldsParametersForm[label]['SELECTInput'] 
            const [errorText,setErrorText] = useState('')
  
            const handleShowError =(errorMessage)=>{
              setErrorText(errorMessage)          
            }
            const parser = new DOMParser()
            const decodedString = parser.parseFromString(`<!doctype html><body>${representation}`, 'text/html').body.textContent
            return (
              <Fragment  key={index}>
                <StyledTableRow >
                  
                  <TableCell  align="center">
                    <strong style={{marginRight:'10px'}}>{label}</strong>
                    ({decodedString})
                  </TableCell >
                  
                  <TableCell >
                    <ParametersFormBodyItem>
                      <SelectComponent
                        xs={6} 
                        title="Select Option"
                        {...fieldsParametersForm[label]['SELECTInput']}  />
                    </ParametersFormBodyItem>
                  </TableCell>

                  <TableCell style={{ width:'20%' }}>
                    <ParametersFormBodyItem>
                      {value && <ExtraParameters                 
                        extraParameters={fieldsParametersForm[label][`${value}Input`]}
                        handleShowError={handleShowError}
                        xs={10}
                        errorText={errorText}
                      /> }                       
                    </ParametersFormBodyItem>
                  </TableCell >

                  <TableCell align="center">
                    <div>
                      {unit}
                    </div>
                  </TableCell >

                </StyledTableRow>
              </Fragment>
            )})}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ParametersForm