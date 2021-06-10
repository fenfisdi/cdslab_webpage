import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS } from '../../../constants/helpInformation'
import SnackbarComponent from '@components/ui/Snackbars'
import LoaderComponent from '../../../components/ui/Loader'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { CompartmentalComparmentalInsPageSection, ContainerChooseDate, Column, Error } from './styles'
import { SelectComponent } from '../../../components/ui/Select'
import { useComparmentalInsPageState } from './state'
import DatePicker from '../../../components/ui/DatePicker'


const ComparmentalInsPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { stateVariable } = useComparmentalInsPageState()
  const [initialDate, setInitialDate] = useState(null)
  const [finalDate, setFinalDate] = useState(null)
  const [showError, setShowError] = useState(false)

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
    var result = new Date(date)
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
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent text={HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS}/>
      </Grid>

      <SubtitleCommon text='Choose variable time series from INS data' />
      
      <Grid container item xs={12} alignItems="center" justify="center">
        
        <SelectComponent
          xs={3}
          title="Select Variable"
          {...stateVariable}
          options={optionListDTO([{label:'option 1',name:'optio1'},{label:'option 2',name:'optio2'}])} />


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
              minDate={initialDate!=null && addDays(initialDate,3)}
            />          
            {showError && (
              <Error>The final date must be greater than the initial date.</Error>
            )}
          </Column>
        </ContainerChooseDate>
        
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
