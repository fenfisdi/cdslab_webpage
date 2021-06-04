import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import SnackbarComponent from '@components/ui/Snackbars'
import {
  CompartmentalChooseDateSection,
  CompartmentalChooseDateDate,
  Column,
  Error
} from './styles'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_CHOOSE_DATE_SIMULATIONS } from '../../../constants/helpInformation'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import { useCompartmentalChooseDatePageState } from './state'
import { isEmpty } from 'lodash'
import LoaderComponent from '../../../components/ui/Loader'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import DatePicker from '../../../components/ui/DatePicker'

const CompartmentalChooseDatePage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const [initialDate, setInitialDate] = useState(null)
  const [finalDate, setFinalDate] = useState(null)
  const [showError, setShowError] = useState(false)
  const { executeRequest,currentSimulation } = useCompartmentalChooseDatePageState({showSnack,
    setShowSnack})

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const handleClickButton =(dateData)=>{
    executeRequest(dateData)
  }

  const handleDate = (dateValue,key) => {
    setShowError(false)
    if(key=='initial'){
      setInitialDate(dateValue)
    }else if(key=='final'){
      setFinalDate(dateValue)
    }   
  }

  useEffect(()=>{
    if(finalDate!=null && finalDate < initialDate ){
      setFinalDate(null)
      setShowError(true)
    }
  },[initialDate,finalDate])

  return (
    <CompartmentalChooseDateSection>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid><Breadcrumbs /></Grid>
        <SupportComponent text={HELP_INFORMATION_CHOOSE_DATE_SIMULATIONS}/>
      </Grid>

      <SubtitleCommon text='Choose simulation dates' />

      {!isEmpty(currentSimulation) && <CompartmentalChooseDateDate>
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
          />          
          {showError && (
            <Error>The final date must be greater than the initial date.</Error>
          )}
        </Column>
      </CompartmentalChooseDateDate> }

      <CompartmentalButton
        disabled={initialDate == '' || finalDate==''}
        onClick={()=>{
          handleClickButton({initialDate,finalDate})
        }}
        justify="center"
        alignItems="center"
        text={'Continue'}
      />

      {isEmpty(currentSimulation) && <LoaderComponent
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
    </CompartmentalChooseDateSection>
  )
}

export default CompartmentalChooseDatePage
