import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS } from '../../../constants/helpInformation'
import SnackbarComponent from '@components/ui/Snackbars'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { CompartmentalComparmentalInsPageSection, ContainerChooseDate, Column, Error, ContianerTable, ContianerButton } from './styles'
import { SelectComponent } from '../../../components/ui/Select'
import { useComparmentalInsPageState } from './state'
import DatePicker from '../../../components/ui/DatePicker'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import ButtonCard from '../../../components/ButtonCard'
import TableFormatDynamic from '../../../components/CompartmentalModels/UploadDataForm/children/TableFormatDynamic'
import AutocompleteComponent from '../../../components/ui/Autocomplete'
import { useComparmentalInsPageCreateFields } from './createFields'
import { find } from 'lodash'
import LoaderComponent from '../../../components/ui/Loader'

const ComparmentalInsPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { stateVariable } = useComparmentalInsPageCreateFields()
  const { 
    dates:{
      initialDate, 
      setInitialDate, 
      finalDate, 
      setFinalDate,
      initialDateRegion,
      finalDateRegion}, 
    tableDate:{headersTable,dataTable}, 
    messages:{ showError, setShowError, showMessage, setShowMessage }, 
    optionsRegions,
    regionChoose,
    setRegionChoose,
    selectOptions,
    handleExecuteIns,
    isValid,
    handleExecuteContinue,
    dataCurrentSimulation } = useComparmentalInsPageState({stateVariable})

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const optionListDTO =(options)=>{
    const arrayStateDto = []
    options.map((state)=>{      
      const stateObject = {}
      stateObject.label = state.label.toLowerCase()
      stateObject.name  = state.representation
      stateObject.value = state.label.toLowerCase()
      arrayStateDto.push(stateObject)      
    })
    return arrayStateDto
  }

  const addDays = (date, days) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const handleDate = (dateValue,key) => {
    setShowError(false)
    if(key=='initial'){
      setInitialDate(dateValue)      
    }else if(key=='final'){
      setFinalDate(dateValue)
    }   
  }

  const diffDays = (dateInit,dateFinit)=>{
    const date1 = new Date(dateInit)
    const date2 = new Date(dateFinit)
    const diffTime = Math.abs(date2 - date1)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const onChangeAutocomplete =(_,value) => {              
    if(!showMessage){
      const shearchedObj = find(optionsRegions,(option)=>{                
        if(option['name'].toLowerCase() == value.toLowerCase()){
          return option
        }
      })
      if(shearchedObj){
        setRegionChoose(shearchedObj)
      }else{                               
        setShowMessage(true)
      }
    }                  
  }

  const filterOptions = (option,{inputValue}) => {
    const findArray = option.filter(a =>a.toLowerCase().includes(inputValue.toLowerCase()))
    if(findArray.length>0){                    
      setShowMessage(false)
    }else{                    
      setShowMessage(true)    
    }
    return findArray                                                    
  }


  return (
    <CompartmentalComparmentalInsPageSection>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent text={HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS}/>
      </Grid>

      <SubtitleCommon text='Choose variable time series from INS data' />
      
      { optionsRegions != null && selectOptions !=null && dataCurrentSimulation!=null && <Grid container item xs={12} alignItems="center" justify="center" direction="column">
        
        <SelectComponent
          xs={3}
          title="Select Variable"
          {...stateVariable}
          options={optionListDTO(selectOptions)} />

        <AutocompleteComponent 
          optionsSearch={optionsRegions} 
          title='Choose region:'
          keyObject="name"
          value={regionChoose!= null ? regionChoose['name'] : ''}
          onChange={onChangeAutocomplete}
          filterOptions={filterOptions}
          showMessage={showMessage}
        />
        

        <ContainerChooseDate>
          <Column>
            <span htmlFor='initial'>Simulation initial date</span>
            <DatePicker
              autoOk
              value={initialDate}                               
              format="dd/MM/yyyy"
              onChange={e => handleDate(e,'initial')}
              inputVariant="outlined"
              variant="inline"
              lenguaje="es"
              id='initial'
              placeholder="dd/mm/yyyy"
              minDate={initialDateRegion!=null && addDays(initialDateRegion,0)} 
              maxDate={initialDateRegion!=null && addDays(initialDateRegion,diffDays(initialDateRegion,finalDateRegion))} 
            />          
          </Column>

          <Column>
            <span htmlFor='final'>Simulation final date</span>
            <DatePicker
              autoOk
              value={finalDate}                                    
              format="dd/MM/yyyy"
              onChange={e => handleDate(e,'final')}
              inputVariant="outlined"
              variant="inline"
              lenguaje="es"
              id='final'
              placeholder="dd/mm/yyyy"
              error={showError}
              minDate={initialDate!=null && addDays(initialDate,0)} 
              maxDate={initialDate!=null && addDays(initialDate,diffDays(initialDate,finalDate))}
            />          
            {showError && (
              <Error>The final date must be greater than the initial date.</Error>
            )}
          </Column>

        </ContainerChooseDate>
        
        <ContianerButton>
          <ButtonCard  
            disabled={isValid?false:true}      
            name={'Retrieve data'}
            indetifier={'indetifier'}
            handleClick={()=>{handleExecuteIns()}}
          />
        </ContianerButton>

        <ContianerTable>
          <Typography>The data that is going to be used is:</Typography>    
          <TableFormatDynamic
            headersTable={headersTable}
            dataTable={dataTable}
            useLabel={true}
          />
        </ContianerTable>

        <CompartmentalButton
          disabled={false}
          onClick={()=>{
            handleExecuteContinue()
          }}
          justify="flex-end"
          alignItems="center"
          text='Continue'
        />        
      </Grid>}

      {optionsRegions == null || selectOptions == null || dataCurrentSimulation == null && <LoaderComponent
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
    </CompartmentalComparmentalInsPageSection>
  )
}

export default ComparmentalInsPage
