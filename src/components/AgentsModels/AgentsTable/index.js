
import { Grid } from '@material-ui/core'
import React, {Fragment} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { renderComponentElement } from '../../../utils/common'


const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#CFD8DC',
    color: '#000000',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(() => ({
  root: {
    background:'#ECEFF1',
    marginBottom:'10px',
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
    '& tr':{      
      '& td:nth-child(3)':{
        background:'white'
      }
    }   
  },
 
})

export default function AgentsTable({tableFields}) {
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
                    const Component = renderComponentElement(rowBody[rowHeader.attr]?.type)  
                    
                    const elementValidator = (validators,valueToCompare)=>{
                      let message = ''                      
                      if(validators && validators.length >0){
                        validators.every(validator => {        
                          if(validator.check && valueToCompare!=''){
                            if(!validator.check(valueToCompare)){
                              message = validator?.message
                              return false
                            }                            
                          }                  
                          message = ''        
                          return true
                        })
                        return {message,isVlidator:true}
                      }else{
                        return {message:'', isVlidator:false}
                      }
                    }

                    const elementRow =(ComponentElement,rowBodyElement,rowHeaderElement)=>{                      
                      const validators = rowBodyElement[rowHeaderElement.attr]?.validators
                      const valueToCompare = rowBodyElement[rowHeaderElement.attr]?.props?.value
                      const { message:messageError } = elementValidator(validators,valueToCompare)                      
                      return ComponentElement!=null ?
                        <Fragment>
                          <ComponentElement.container 
                            {...ComponentElement?.props} 
                            {...rowBodyElement[rowHeaderElement.attr]?.props}
                          />
                          <p style={{color:'red'}}>{messageError}</p>
                        </Fragment>
                        :rowBodyElement[rowHeaderElement.attr]?.label
                    }                    
                   
                    return(
                      <Fragment  key={indexHeader}>                        
                        <StyledTableCell align="center">
                          {
                            elementRow(Component,rowBody,rowHeader)
                          }
                        </StyledTableCell> 
                      </Fragment>                                          
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