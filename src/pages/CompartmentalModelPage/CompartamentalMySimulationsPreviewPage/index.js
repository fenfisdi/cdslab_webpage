import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import GetAppIcon from '@material-ui/icons/GetApp'
import { useCompartamentalMySimulationsPreviewState } from './state'
import { useCompartamentalMySimulationPreviewStyles } from './styles'
import theme from '../../../styles/cdslabTheme'
import { Paper } from '@material-ui/core'
import { useStore } from '../../../store/storeContext'
import { Table } from '@material-ui/core'
import { TableBody } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableHead } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Plot from 'react-plotly.js'
import plot_json from './data.json'
import imgCsv from'../../../assets/images/csv_darius_dan.svg'
import imgGrap from'../../../assets/images/line-graph_pixelmeetup.svg'
import { CSVLink } from 'react-csv'

const CompartamentalMySimulationsPreviewPage = () => {
  const classes = useCompartamentalMySimulationPreviewStyles(theme)
  const {loading,mySimulationFiles,handleDownloadFile,mySimulationFileSelected} = useCompartamentalMySimulationsPreviewState()
  const [dataFile] = useState(mySimulationFileSelected)
  const [plotJson] = useState(JSON.parse(plot_json))
  const {
    state: {
      mySimulations: { mySimulationSelected }
    }
  } = useStore()
  const {
    name,
    model_name,
    parameter_type,
    data_source,
    status,
    state_variable_limits
  } = mySimulationSelected

  const info = [
    {name : 'Type of Simulation'},
    {name : 'Model'},
    {name : 'Parameters'},
    {name : 'State Variables to fit <only if adjust parameters'},
    {name : 'Data Source'},
    {name : 'Status'},
    {name : 'Execution time'}
  ]

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        <Grid container item xs={12}>
          <Grid item xs={7} className={classes.texto}>
            {
              info.map((elem,i) => (
                <Paper className={classes.paper} key={i}>
                  {elem.name}
                </Paper>
              ))
            }
          </Grid>
          <Grid item xs={3} >
            <Paper className={classes.paper}>{name}</Paper>
            <Paper className={classes.paper}>{model_name ? model_name : 'none'}</Paper>
            <Paper className={classes.paper}>{parameter_type ? parameter_type : 'none'}</Paper>
            <Paper className={classes.paper,classes.variables}> {
              state_variable_limits.map((elem,i) => (
                <p key={i}> {elem.label} = {elem.value} </p>
              ))
            } </Paper>
            <Paper className={classes.paper}>{data_source ? data_source : 'none'}</Paper>
            <Paper className={classes.paper}>{status}</Paper>
            <Paper className={classes.paper}>2 horas</Paper>
          </Grid>
          <Grid container item xs={2} alignItems="flex-end" justify="center">
            <Grid item xs container></Grid>
            <Grid item xs>
              <span className={classes.textoDownload}>Dowdload</span>
              <Button
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(mySimulationSelected)
                )}`}
                download="filename.json"
              >
                <GetAppIcon className={classes.iconDownload}/>
              </Button>
            </Grid>
          </Grid>
        
        </Grid>
        <hr />
        <Grid container item xs={12}>
          <Grid  item xs={12}>
            <span className={classes.textoDownload}> Associated Files</span>
          </Grid>
          <Grid container item xs={12}>
            <Grid  item xs={12}>
              <Table>
              
                <TableHead>
                  <TableRow>
                    <TableCell>Ext</TableCell>
                    <TableCell>FileName</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Download</TableCell>
                  </TableRow>
                </TableHead>
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
                              : ( <p>img</p>)
                          }
                          
                        </TableCell>
                      </TableRow>

                    ))
                  }
                </TableBody>
              </Table>
            </Grid>
            <Grid  item xs={12} className={classes.plot}>
              <Plot 
                {...plotJson}
              />
            </Grid>
          </Grid>
          <Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default CompartamentalMySimulationsPreviewPage