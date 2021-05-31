import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { useCompartamentalMySimulationsPreviewState } from './state'
import { useCompartamentalMySimulationPreviewStyles } from './styles'
import theme from '../../../styles/cdslabTheme'
import { useStore } from '../../../store/storeContext'
import Plot from 'react-plotly.js'
import LoaderComponent from '../../../components/ui/Loader'
import { TableMySimulationPreview } from '../../../components/CompartmentalModels/mySimulationsPreview/tableSimulationPreview'
import ReviewSimulationSettings from '../../../components/CompartmentalModels/ReviewSimulationSettings'
import { ContainerTitle } from '../../SimulationModelPage/SimulationMainPage/styles'
import TitleIcon from '../../../components/layouts/TitleIcon'
import SupportComponent from '../../../components/SupportComponent'
import graphIcon from '../../../assets/images/line-chart_freepik.svg'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../constants/helpInformation'
const CompartamentalMySimulationsPreviewPage = () => {
  const classes = useCompartamentalMySimulationPreviewStyles(theme)
  const {
    loading
  } = useCompartamentalMySimulationsPreviewState()

  const [plotJson, setPlotJson] = useState()
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
    state_variable_limits,
    parameters_limits
  } = mySimulationSelected

  return (
    <div className={classes.root}>
      {loading ? 
        (<LoaderComponent
          width={50}
          height={50}
          marginTop={5}
        />)
        :
        (
          <div>
            <Grid container xs='12'>
              <ContainerTitle>
                <TitleIcon title={name} icon={graphIcon} width={60} height={60} />
                <SupportComponent text={HELP_INFORMATION_NEW_SIMULATIONS}/>
              </ContainerTitle>
            </Grid>
            <Grid container xs='10' className= {classes.contentReview}>
              <ReviewSimulationSettings
                className= {classes.review}
                simulation={{
                  name:name,
                  parameter_type:parameter_type,
                  modelName:model_name,
                  parameters_limits:parameters_limits,
                  state_variable_limits:state_variable_limits,
                  fileName:data_source,
                  status:status
                }}
                showButton={false}
                showButtonDownload={true}
              />
            </Grid>
            <Grid container xs='10' className= {classes.contentReview}>
              <span className={classes.textoDownload}> Associated Files</span>
             
              <TableMySimulationPreview 
                setPlotJson={setPlotJson}
              />
              {
                plotJson ?
                  (<Grid  item xs={12} className={classes.plot}>
                    <Plot 
                      {...plotJson}
                    />
                  </Grid>)
                  :
                  (<Grid  item xs={12} className={classes.notPlot}>
                    <div className={classes.divPlot}>GRAPH</div>
                  </Grid>
                  )
              }
            </Grid>
          </div>  
        )}
    </div>
  )
}
export default CompartamentalMySimulationsPreviewPage