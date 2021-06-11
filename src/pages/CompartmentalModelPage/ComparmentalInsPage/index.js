import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_UPLOAD_DATA_SIMULATIONS } from '../../../constants/helpInformation'
import SnackbarComponent from '@components/ui/Snackbars'
import LoaderComponent from '../../../components/ui/Loader'
import SubtitleCommon from '../../../components/ui/SubtitleCommon'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { CompartmentalComparmentalInsPageSection, ContainerChooseDate, Column, Error, ContianerTable, ContainerSearchSection,SearchSection } from './styles'
import { SelectComponent } from '../../../components/ui/Select'
import { useComparmentalInsPageState } from './state'
import DatePicker from '../../../components/ui/DatePicker'
import TableFormatStatic from '../../../components/CompartmentalModels/UploadDataForm/children/TableFormatStatic'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import ButtonCard from '../../../components/ButtonCard'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

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

  const  top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: 'Schindler\'s List', year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: 'It\'s a Wonderful Life', year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 }]

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
      
      <Grid container item xs={12} alignItems="center" justify="center" direction="column">
        
        <SelectComponent
          xs={3}
          title="Select Variable"
          {...stateVariable}
          options={optionListDTO([{label:'option 1',name:'optio1'},{label:'option 2',name:'optio2'}])} />

        <ContainerSearchSection>
          <div>
            <Typography>Choose region:</Typography>
          </div>
          <SearchSection>
            <i className="fas fa-search"></i>
            <div style={{ width: 300 }}>            
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search"
                    margin="normal"                
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />
            </div>
          </SearchSection>
          
        </ContainerSearchSection>

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
        
        <ButtonCard        
          name={'Retrieve data'}
          indetifier={'indetifier'}
          handleClick={()=>{}}
        />

        <ContianerTable>
          <Typography>The data that is going to be used is:</Typography>    
          <TableFormatStatic Variable={stateVariable.value} />
        </ContianerTable>

        <CompartmentalButton
          disabled={false}
          onClick={()=>{}}
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
