import { Grid } from '@material-ui/core'
import React, { useState }  from 'react'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import { HELP_INFORMATION_NEW_SIMULATIONS } from '../../../../constants/helpInformation'
import SupportComponent from '../../../../components/SupportComponent'
import QuarantineTitleForm from '../../../../components/AgentsModels/AgentsQuarantine/QuarantineTitleForm'
import { RestrictionsItem, RestrictionsItems, RestrictionsSelectItem, SectionCyclicQuarantineRestrictions } from './styles'
import { Input } from '../../../../components/ui/Input'
import DatePicker from '../../../../components/ui/DatePicker'
import { useQuarantineRestrictionsPageState } from './state'
import { SelectComponent } from '../../../../components/ui/Select'
const QuarantineRestrictionsPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const {
    initialDate,
    handleDate,
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput
  } = useQuarantineRestrictionsPageState({showSnack, setShowSnack})

  return (
    <Grid  container xs={12} justify='center' alignItems='center'>
      <Grid container item xs={12}
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid><Breadcrumbs /></Grid>
        <Grid><SupportComponent title="Help" text={HELP_INFORMATION_NEW_SIMULATIONS} /></Grid>
      </Grid>
      
      <SectionCyclicQuarantineRestrictions>
        <QuarantineTitleForm
          title='Cyclic Quarantine Restrictions'
          justify='center' 
          alignItems='center' 
          style={{background:'#CFD8DC', padding:'10px', color:'black'}}
        />

        <RestrictionsItems>
          <RestrictionsItem>
            <p>Grace time</p>
          </RestrictionsItem>
          <RestrictionsItem width='60%'>            
            <DatePicker
              autoOk              
              format="dd/MM/yyyy"
              value={initialDate}
              onChange={(e) => handleDate(e)}
              inputVariant="outlined"
              variant="inline"
              lenguaje="es"
              id='initial'
              placeholder="dd/mm/yyyy"              
            />            
          </RestrictionsItem>
        </RestrictionsItems>

        <RestrictionsItems>
          <RestrictionsItem>
            <p>Global quarantine time</p>
          </RestrictionsItem>
          <RestrictionsItem width='10%' style={{marginRight:'10px'}}>
            <Input
              disabled={false}
              required={true}
              fullWidth={false}
              variant='outlined'
              styles={{'padding':'0px'}}
              {...globalCuarantineTimeInput}
            /> 
          </RestrictionsItem>
          <RestrictionsItem>
            <RestrictionsSelectItem>
              <SelectComponent
                {...globalCuarantineTimeSelect}
                options={[]}
                title='Units'

              />
            </RestrictionsSelectItem>
          </RestrictionsItem>
        </RestrictionsItems>

      </SectionCyclicQuarantineRestrictions>


      <SectionCyclicQuarantineRestrictions style={{marginTop:'15px'}}>
        <QuarantineTitleForm
          title='Time without restrictions'
          justify='center' 
          alignItems='center' 
          style={{background:'#CFD8DC', padding:'10px', color:'black'}}
        />

        <RestrictionsItems>

          <RestrictionsItem>
            <p>Mode</p>
          </RestrictionsItem>
          
          <RestrictionsItem width='60%'>
            <RestrictionsSelectItem>
              <SelectComponent
                options={[]}
                title='Mode'
                {...timeWithoutRestrictionsModeSelect}
              />
            </RestrictionsSelectItem>
          </RestrictionsItem>

        </RestrictionsItems>

        <RestrictionsItems>
          <RestrictionsItem>
            <p>Time without restrictions</p>
          </RestrictionsItem>
          
          <RestrictionsItem width='10%' style={{marginRight:'10px'}}>
            <Input
              disabled={false}
              required={true}
              fullWidth={false}
              variant='outlined'
              styles={{'padding':'0px'}}
              {...timeWithoutRestrictionsInput}
            /> 
          </RestrictionsItem>

          <RestrictionsItem>
            <RestrictionsSelectItem>
              <SelectComponent
                {...timeWithoutRestrictionsSelect}
                options={[]}
                title='Units'

              />
            </RestrictionsSelectItem>
          </RestrictionsItem>

        </RestrictionsItems>

      </SectionCyclicQuarantineRestrictions>





    </Grid>
  )
}

export default QuarantineRestrictionsPage
