import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useCompartmentalChooseSimulationPageState } from './state'
import { OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION } from '../../../constants/compartmental'
import {HELP_INFORMATION_CHOOSE_SIMULATIONS} from '../../../constants/helpInformation'
import SnackbarComponent from '@components/ui/Snackbars'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import SupportComponent from '../../../components/SupportComponent'
import LoaderComponent from '../../../components/ui/Loader'
import {
  CompartmentalChooseSimulationSection,
  CompartmentalChooseSimulatioFormTitle,
  CompartmentalChooseSimulatioDate,
  Label,
  Input,
  Column,
  Error
} from './styles'

const CompartmentalChooseSimulationPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const [initialDate, setInitialDate] = useState('')
  const [finalDate, setFinalDate] = useState('')
  const [showError, setShowError] = useState(false)
  const {
    executeSelectedOption,
    loadingSimulationFolderInformation
  } = useCompartmentalChooseSimulationPageState({ showSnack, setShowSnack, initialDate, finalDate })

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const handleDate = (dateFinal) => {
    setShowError(false)
    console.log(dateFinal > initialDate)
    if (dateFinal > initialDate) {
      setFinalDate(dateFinal)
    } else {
      setFinalDate('')
      setShowError(true)
    }
  }

  return (
    <CompartmentalChooseSimulationSection>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <p></p>
        <SupportComponent text={HELP_INFORMATION_CHOOSE_SIMULATIONS}/>
      </Grid>

      <Grid container item xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Choose simulation dates
        </Typography>
      </Grid>

      <CompartmentalChooseSimulatioDate>
        <Column>
          <Label htmlFor='initial'>Simulation initial date</Label>
          <Input
            type='date'
            id='initial'
            value={initialDate}
            onChange={e => setInitialDate(e.target.value)}
          />
        </Column>

        <Column>
          <Label htmlFor='final'>Simulation final date</Label>
          <Input
            type='date'
            id='final'
            value={finalDate}
            onChange={e => handleDate(e.target.value)}
            error={showError}
          />
          {showError && (
            <Error>The final date must be greater than the initial date.</Error>
          )}
        </Column>
      </CompartmentalChooseSimulatioDate>

      <CompartmentalChooseSimulatioFormTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Choose simulation type
        </Typography>
      </CompartmentalChooseSimulatioFormTitle>

      {!loadingSimulationFolderInformation && <Grid container item xs={12}>
        <ModelCard
          ruta="parameters"
          options={OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION}
          direction="column"
          eventEmitted={executeSelectedOption}
          disabled={initialDate === '' || finalDate === ''}
        />
      </Grid>}

      {loadingSimulationFolderInformation && <LoaderComponent
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
    </CompartmentalChooseSimulationSection>
  )
}

export default CompartmentalChooseSimulationPage
