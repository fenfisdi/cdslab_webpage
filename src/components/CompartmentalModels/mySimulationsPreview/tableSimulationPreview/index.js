import { TableHead } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableBody } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { Table } from '@material-ui/core'
import React from 'react'
import { CSVLink } from 'react-csv'
import TitleIcon from '../../../layouts/TitleIcon'
import GetAppIcon from '@material-ui/icons/GetApp'
import imgCsv from'../../../../assets/images/csv_darius_dan.svg'
import imgGrap from'../../../../assets/images/line-graph_pixelmeetup.svg'
import imgPreview from '../../../../assets/images/document_freepik.svg'
import { useTableSimulationPreview } from './styles'

export const TableMySimulationPreview = (props) => {

  const {
    mySimulationFiles,
    handelDownloadImg,
    setPlotJson
  } = props
  const classes = useTableSimulationPreview()
  return (
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
                mySimulationFiles.map((elem, i) => (
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
                          ? (<CSVLink
                            data={elem.body}
                            asyncOnClick={true}
                          >
                            <GetAppIcon className={classes.iconDownload}/>
                          </CSVLink>)
                          : ( 
                            <Button onClick={() => handelDownloadImg(elem.body)}>
                              <GetAppIcon className={classes.iconDownload}/>
                            </Button>
                          )
                      }
                      {
                        (elem.ext === 'img' && elem.status === 'done') 
                              && (
                                <Button onClick={() => setPlotJson(elem.json_image)}>
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
  )
}
