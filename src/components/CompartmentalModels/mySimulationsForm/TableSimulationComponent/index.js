import { Table } from '@material-ui/core'
import { TableRow,TableCell,TableBody,Grid } from '@material-ui/core'
import React, { useState } from 'react'
import TitleIcon from '../../../layouts/TitleIcon'
import { CheckBoxComponent } from '../CheckBoxComponent'
import imgPreview from '../../../../assets/images/document_freepik.svg'
import { Link } from 'react-router-dom'
import { TablePagination } from '@material-ui/core'
import { TableHead } from '@material-ui/core'

export const TableSimulationsComponent = (props) => {

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const {columns,rowsFiltered,handleClickPreview,classes, handleCheck} = props

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5))
    setPage(0)
  }

  return (
    <Grid container item xs={12}>
      <Table>
          
        <TableHead>
          <TableRow>
            {
              columns.map((col,i) =>  (
                <TableCell key={i}  className={classes.columns}>
                  {col.field}
                </TableCell>
              )
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rowsFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => (
                <TableRow key={row.name}> 
                  <TableCell padding="checkbox">
                    <CheckBoxComponent 
                      row={row} 
                      handleCheck={handleCheck}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.model_name}</TableCell>
                  <TableCell>{row.parameter_type}</TableCell>
                  <TableCell>{row.data_source}</TableCell>
                  <TableCell>{row.inserted_at}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Link to='preview'  onClick={() => handleClickPreview(row)} >
                      <TitleIcon
                        icon={imgPreview} 
                        width={20} 
                        height={20}  
                        fontSize='40px'
                        className={classes.iconPreview}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rowsFiltered.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Grid>
  )
}
