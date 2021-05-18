import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import SupportComponent from '../../../components/SupportComponent'
import { 
  CompartmentalReviewConfigurationInformationContainer, 
  CompartmentalReviewConfigurationInformationFormTitle,
  CompartmentalReviewConfigurationInformationBody,
  Items,
  SubItems,
  ItemsTable,
  SubItemsTable,
  ExtraParamsItem,
  ExtraParamsLabel } from './styles'
import {HELP_INFORMATION_REVIEW_CONFIGURATION_INFORMATION_SIMULATIONS} from '../../../constants/helpInformation'
import { Typography } from '@material-ui/core'
import { useCompartmentalReviewConfigurationInformationPageState } from './state'
import LoaderComponent from '../../../components/ui/Loader'
import SnackbarComponent from '@components/ui/Snackbars'
import { isEmpty } from 'lodash'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'

const CompartmentalReviewConfigurationInformationPage =()=>{
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  
  const {
    executeRequestRunSimulation,
    currentSimulation,
    predefinedModelSelected,
    fileName} = useCompartmentalReviewConfigurationInformationPageState({showSnack, setShowSnack})
 
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const displayParameters=(parameters)=>{
    return parameters.map( parameter => {
      return(
        <SubItemsTable key={parameter.label}>    
          <ExtraParamsLabel>
            label: {parameter.label} 
          </ExtraParamsLabel>
          {parameter.type=='fixed' ?
            <ExtraParamsItem>
              value: {parameter.value}
            </ExtraParamsItem>:displayOptimizedParametersValue(parameter)}
        </SubItemsTable>
      )
    })
  } 

  const displayOptimizedParametersValue =(parameter)=>{
    return (<ExtraParamsItem>
      <span style={{marginRight:'10px'}}>min Value:{parameter.min_value}</span>
      <span>max Value:{parameter.max_value}</span>
    </ExtraParamsItem>)
  }

  const displayStateVariables=(stateVariables)=>{
    return stateVariables.map( variable => {
      return(
        <SubItemsTable key={variable.label}>    
          <ExtraParamsLabel>
            label: {variable.label} 
          </ExtraParamsLabel>
          <ExtraParamsItem>
              value: {variable.value}
          </ExtraParamsItem>
        </SubItemsTable>
      )
    })
  } 

  return(
    <CompartmentalReviewConfigurationInformationContainer>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_REVIEW_CONFIGURATION_INFORMATION_SIMULATIONS}/>
      </Grid>

      <CompartmentalReviewConfigurationInformationFormTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Review configurations
        </Typography>
      </CompartmentalReviewConfigurationInformationFormTitle>
 
      {!isEmpty(currentSimulation) && !isEmpty(predefinedModelSelected) && <CompartmentalReviewConfigurationInformationBody>
        <Items>
          <SubItems className="titleSubItmes">
            <span>Simulation Name:</span>
          </SubItems>
          <SubItems>
            <span>{currentSimulation.name}</span>
          </SubItems>
        </Items>
        <Items>
          <SubItems className="titleSubItmes">
            <span>Type of simulation:</span>
          </SubItems>
          <SubItems>
            <span>{currentSimulation.parameter_type}</span>
          </SubItems>
        </Items>
        <Items>
          <SubItems className="titleSubItmes">
            <span>Model:</span>
          </SubItems>
          <SubItems>
            <span>{predefinedModelSelected.modelData.name}</span>
          </SubItems>
        </Items>
        <ItemsTable>
          <SubItems className='tableTitle'>
            <span>Parameters:</span>
          </SubItems>
          {displayParameters(currentSimulation.parameters_limits)}
        </ItemsTable>
        <ItemsTable>
          <SubItems className='tableTitle'>
            <span>State Variable:</span>
          </SubItems>
          {displayStateVariables(currentSimulation.state_variable_limits)}
        </ItemsTable>
        <Items className="jump">
          <SubItems className="titleSubItmes">
            <span>Data Source:</span>
          </SubItems>
          <SubItems >
            <span>{fileName}</span>
          </SubItems>
        </Items>
        <CompartmentalButton
          disabled={false}
          onClick={()=>{executeRequestRunSimulation()}}
          justify="center"
          alignItems="center"
          text={'Execute simulation'}
        />
      </CompartmentalReviewConfigurationInformationBody>}

    

      {false && <LoaderComponent
        width={50}
        height={50}
        marginTop={5}
      />}

      {showSnack && showSnack.show && <SnackbarComponent
        snackDuration={3500}
        configData={showSnack}
        handleCloseSnack={handleCloseSnack}
        successMessage={showSnack.successMessage}
        errorMessage={showSnack.errorMessage} />}
    </CompartmentalReviewConfigurationInformationContainer>
  )
}

export default CompartmentalReviewConfigurationInformationPage