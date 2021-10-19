import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell, TableContainer, TableHead } from '@material-ui/core'

import ConfigTable from '../../../components/AgentsModels/AgentsNaturalHistory/ConfigTable/index'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'

import { useAgentsNaturalHistoryPageState } from './state'
import naturalHistoryStyles from './styles'

const AgentsNaturalHistoryPage = () => {
  const classes = naturalHistoryStyles()

  const {
    VulnerabilityGroupsInformation,
    vulnerabilityGroupDiseaseStates
  } = useAgentsNaturalHistoryPageState()

  const tableColumns4 = [
    {
      title: 'Variables to configure',
      att: 'name',
      type: 'label'
    }
  ]

  const renderRows = () => (
    VulnerabilityGroupsInformation.map((item, index) => (
      <TableRow className={classes.row} key={index}>
        <TableCell className={classes.cell} align="center">
          {item.name}
        </TableCell>
        <TableCell>
          <ConfigTable
            showDelete={false}
            showAddButton={false}
            distributionType="Mobility Group"
            columns={tableColumns4}
            initialItems={vulnerabilityGroupDiseaseStates}
          />
        </TableCell>
      </TableRow>
    ))
  )
  
  return(
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell align="center">Vulnerability Group Name</TableCell>
            <TableCell align="center">Disease State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { VulnerabilityGroupsInformation ? renderRows() : <h6>Cargando...</h6> }
        </TableBody>
      </Table>
      
      <CompartmentalButton
        justify='flex-end'
        alignItems='center'
        text='Continue'
        onClick={()=>{}}
        disabled={false}
      />  
    </TableContainer>
  )
}

export default AgentsNaturalHistoryPage