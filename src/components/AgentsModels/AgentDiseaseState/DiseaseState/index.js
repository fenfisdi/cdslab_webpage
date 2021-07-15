
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
import { renderComponentElement } from '../../../../utils/common'
import { isEmpty } from 'lodash'

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

export default function TableObjDinamic({tableFields}) {
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
                    const Component = renderComponentElement(rowBody[rowHeader.attr])
                   
                    const { showOption={} }=rowBody || {}                    
                    
                    const handleShowInformation =(dependence)=>{
                      const isFound = tableFields?.body.find((tableField)=>tableField?.name==dependence)                       
                      return isFound?.props?.value
                    }

                    const elementRow =(ComponentElement,rowBodyElement,rowHeaderElement)=>{
                      return ComponentElement!=null ?
                        <ComponentElement.container {...ComponentElement.props} {...rowBodyElement.props}/>:rowBodyElement[rowHeaderElement.attr]
                    }

                    const extraElementRow =(extraProps)=>{                      
                      const ComponentElement = renderComponentElement(extraProps.type)
                      return <ComponentElement.container {...extraProps.props}/>
                    }
                   
                    return(
                      <Fragment  key={indexHeader}>
                        {isEmpty(showOption) && rowHeader.attr!='extra' && <StyledTableCell align="center">
                          {
                            elementRow(Component,rowBody,rowHeader)
                          }
                        </StyledTableCell>}
                        {
                          !isEmpty(showOption) && handleShowInformation(showOption.dependence) && rowHeader.attr!='extra' && <StyledTableCell align="center">
                            {
                              elementRow(Component,rowBody,rowHeader)
                            }
                          </StyledTableCell>
                        }
                        {
                          !isEmpty(showOption) && handleShowInformation(showOption.dependence) && rowHeader.attr == 'extra' && rowBody[rowHeader.attr] && <StyledTableCell align="center">
                            {extraElementRow(rowBody[rowHeader.attr])}
                          </StyledTableCell>
                        }
                        
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