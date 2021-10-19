
import { Grid } from '@material-ui/core'
import React, {Fragment} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { renderComponentElement } from '../../../../../../utils/common'
import { Button } from '../../../../../../components/ui/Buttons'



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
    background:'#F5F6F7',
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
  },
 
})

export default function InitialPopulationTable({tableFields,itemsTable,optionsByItem,handlerAddOption}) {
  const classes = useStyles()
  const { body,headers } = tableFields
  return (
    <Grid container item xs={12} direction="column" justify='center' alignItems='center'>
      <Grid container item xs={10} direction="column" justify='center' alignItems='center'>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {headers.map((header,index) => (
                  <StyledTableCell align="center" key={index}>{header.label}</StyledTableCell>
                ))}               
              </TableRow>
            </TableHead>
            <TableBody>
              {itemsTable.map((itemTable,indexItemTable)=>{
                return (
                  <StyledTableRow key={indexItemTable}>
                    {headers.map((itemHeader,indexHeader)=>{ 
                      const Component = renderComponentElement(body[itemHeader.attr]?.type)  
                  
                      const elementRow =(ComponentElement,itemElement)=>{                        
                        return ComponentElement!=null ?
                          <div style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>                            
                            <ComponentElement.container                              
                              {...optionsByItem[indexItemTable][itemHeader.attr]}
                              {...itemElement?.props}
                              itemTable={itemTable}
                              indexItem={indexItemTable}
                              value={itemTable[itemHeader.attr]}
                              onChange={(event)=>{                                 
                                itemElement?.props.onChange({event,itemTable,indexItemTable,propHeader:itemHeader})
                              }}
                              disabled={
                                itemElement?.props?.onDisabled!=undefined ? 
                                itemElement?.props?.onDisabled({itemTable,indexItemTable,propHeader:itemHeader}):
                                false}
                            />                        
                          </div>
                          : (typeof itemElement?.label == 'function') ? <p style={{'color':'#006064'}}>{itemElement?.label(indexItemTable+1)}</p>: itemElement?.label
                      }

                      return(
                        <Fragment  key={indexHeader}>                       
                          <StyledTableCell align="left">                            
                            {
                              elementRow(Component,body[itemHeader.attr])
                            }
                          </StyledTableCell>                        
                        </Fragment>                                          
                      )
                    }) }
                  </StyledTableRow>
                )               
              })}
              <Button onClick={handlerAddOption} color="primary">
                Add
              </Button> 
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>                  
    </Grid>
  )
}