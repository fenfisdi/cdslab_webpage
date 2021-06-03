import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import SnackbarComponent from '@components/ui/Snackbars'
import {
  CompartmentalChooseDateSection,
  CompartmentalChooseDateDate,
  Input,
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

const CompartmentalChooseDatePage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const [initialDate, setInitialDate] = useState('')
  const [finalDate, setFinalDate] = useState('')
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
    if(finalDate!='' && finalDate < initialDate ){
      setFinalDate('')
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
          <Input
            type='date'
            id='initial'
            value={initialDate}
            onChange={e => handleDate(e.target.value,'initial')}
          />
        </Column>

        <Column>
          <span htmlFor='final'>Simulation final date</span>
          <Input
            type='date'
            id='final'
            value={finalDate}
            onChange={e => handleDate(e.target.value,'final')}
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
