import { Table } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableBody } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'
import TitleIcon from '../../../layouts/TitleIcon'
import { CheckBoxComponent } from '../CheckBoxComponent'
import imgPreview from '../../../../assets/images/document_freepik.svg'

export const TableSimulationsComponent = (props) => {

  const {columns,rowsFiltered,handleClickPreview,classes} = props

  return (
    <Grid container item xs={12}>
      <Table>
          
        {
          columns.map((col,i) =>  (
            <th key={i}  className={classes.columns}>
              {col.field}
            </th>
          )
          )
        }
        <TableBody>
          {
            rowsFiltered.map((row,i) => (
              <TableRow key={i}> 
                <TableCell padding="checkbox">
                  <CheckBoxComponent isActive={row.check} />
                </TableCell>
                <TableCell>{row.simulationName}</TableCell>
                <TableCell>{row.modelType}</TableCell>
                <TableCell>{row.parameterType}</TableCell>
                <TableCell>{row.dataSrc}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <TitleIcon onClick={() => handleClickPreview(row)} 
                    icon={imgPreview} 
                    width={20} 
                    height={20}  
                    fontSize='40px'
                    className={classes.iconPreview}
                  />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Grid>
  )
}
