import { TableHead } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableBody } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { Table } from '@material-ui/core'
import React, { useState } from 'react'
import TitleIcon from '../../../layouts/TitleIcon'
import GetAppIcon from '@material-ui/icons/GetApp'
import imgCsv from'../../../../assets/images/csv_darius_dan.svg'
import imgGrap from'../../../../assets/images/line-graph_pixelmeetup.svg'
import imgPreview from '../../../../assets/images/document_freepik.svg'
import { useTableSimulationPreview } from './styles'
import { useMySimulationsPreviewState } from './state'
import { TablePagination } from '@material-ui/core'
import { Grid } from '@material-ui/core'

export const TableMySimulationPreview = (props) => {

  const {
    setPlotJson
  } = props
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const { mySimulationFiles,handleDownloadCsv,handleDownloadHtml } = useMySimulationsPreviewState()
  
  const classes = useTableSimulationPreview()

  const handleChangePage = (newPage) => {
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
            <TableCell>Ext</TableCell>
            <TableCell>FileName</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        {
          mySimulationFiles ?
            (
              <TableBody>
                {
                  mySimulationFiles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((elem, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          {
                            elem.ext === 'csv'
                              ? (<img src={imgCsv} className={classes.imgExt} />)
                              : (<img src={imgGrap} className={classes.imgExt} />)
                          }
                        </TableCell>
                        <TableCell>
                          {elem.name}
                        </TableCell>
                        <TableCell>
                          {elem.type}
                        </TableCell>
                        <TableCell>
                          {
                            elem.ext === 'csv'
                              ? (<Button onClick={() => handleDownloadCsv(elem.body)}>
                                <GetAppIcon className={classes.iconDownload}/>
                              </Button>)
                              : ( 
                                <Button onClick={() => handleDownloadHtml(elem.body)}>
                                  <GetAppIcon className={classes.iconDownload}/>
                                </Button>
                              )
                          }
                          {
                            (elem.ext === 'html') 
                              && (
                                <Button onClick={() => setPlotJson(JSON.parse(elem.json_image))}>
                                  <TitleIcon
                                    icon={imgPreview} 
                                    width={20} 
                                    height={20}  
                                    fontSize='40px'
                                  />
                                </Button>
                              )
                          }
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            )
            :
            (<TableBody> <TableCell> Not Files </TableCell> </TableBody>)
        }
      </Table>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={mySimulationFiles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Grid>
  )
}
