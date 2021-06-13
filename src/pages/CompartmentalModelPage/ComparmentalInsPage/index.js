import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS } from '../../../constants/helpInformation'
import SnackbarComponent from '@components/ui/Snackbars'
import LoaderComponent from '../../../components/ui/Loader'
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

const ComparmentalInsPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { stateVariable } = useComparmentalInsPageCreateFields()
  const { 
    dates:{initialDate, setInitialDate, finalDate, setFinalDate}, 
    tableDate:{headersTable,dataTable}, 
    messages:{ showError, setShowError, showMessage, setShowMessage }, 
    optionsSearch,
    regionChoose,
    setRegionChoose,
    selectOptions } = useComparmentalInsPageState({stateVariable})

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const optionListDTO =(options)=>{
    const arrayStateDto = []
    options.map((state)=>{      
      const stateObject = {}
      stateObject.label = state.label.toLowerCase()
      stateObject.name  = state.name
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
      setFinalDate(null)
    }else if(key=='final'){
      setFinalDate(dateValue)
    }   
  }


  return (
    <CompartmentalComparmentalInsPageSection>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        {/* <Grid><Breadcrumbs /></Grid> */}
        <SupportComponent text={HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS}/>
      </Grid>

      <SubtitleCommon text='Choose variable time series from INS data' />
      
      <Grid container item xs={12} alignItems="center" justify="center" direction="column">
        
        <SelectComponent
          xs={3}
          title="Select Variable"
          {...stateVariable}
          options={optionListDTO(selectOptions)} />

        <AutocompleteComponent 
          optionsSearch={optionsSearch} 
          title='Choose region:'
          keyObject="title"
          value={regionChoose}
          onChange={(event,value)=>{              
            if(!showMessage){
              if(event.code=='Enter'){                
                const shearchedObj = find(optionsSearch,(option)=>{                
                  if(option['title'].toLowerCase() == value.toLowerCase()){
                    return option
                  }
                })                
                if(shearchedObj){
                  setRegionChoose(shearchedObj['title'])
                }else{                               
                  setShowMessage(true)
                }
              }else{
                setRegionChoose(value)
              }
            }                  
          }}
          filterOptions={(option,{inputValue})=>{
            const findArray = option.filter(a =>a.toLowerCase().includes(inputValue.toLowerCase()))
            if(findArray.length>0){                    
              setShowMessage(false)
              return findArray
            }else{                    
              setShowMessage(true)
              return findArray
            }                                                    
          }}
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
              maxDate={initialDate!=null && addDays(initialDate,3)}
              minDate={initialDate!=null && addDays(initialDate,3)}
            />          
            {showError && (
              <Error>The final date must be greater than the initial date.</Error>
            )}
          </Column>

        </ContainerChooseDate>
        
        <ContianerButton>
          <ButtonCard        
            name={'Retrieve data'}
            indetifier={'indetifier'}
            handleClick={()=>{}}
          />
        </ContianerButton>


        {/* <ContianerTable>
          <Typography>The data that is going to be used is:</Typography>    
          <TableFormatStatic Variable={stateVariable.value} />
        </ContianerTable> */}


        <ContianerTable>
          <Typography>The data that is going to be used is:</Typography>    
          <TableFormatDynamic
            headersTable={headersTable}
            dataTable={dataTable}
          />
        </ContianerTable>

        <CompartmentalButton
          disabled={false}
          onClick={()=>{
            
          }}
          justify="flex-end"
          alignItems="center"
          text={'Continue'}
        />        
      </Grid>

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
    </CompartmentalComparmentalInsPageSection>
  )
}

export default ComparmentalInsPage
