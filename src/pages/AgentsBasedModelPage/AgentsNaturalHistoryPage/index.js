import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import ConfigTable from '../../../components/AgentsModels/AgentsNaturalHistory/ConfigTable/index'   /* /ConfigTable/index */
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton' /* components */
import { useAgentsNaturalHistoryPageState } from './state'


const useStyles = makeStyles((theme)=>({
  cell:{
    backgroundColor: theme.palette.action.hover,
  },
  row:{
    
  },
  head:{
    padding: theme.spacing(2),
    backgroundColor: theme.palette.action.focus
  }
}))

const NestingComponent = () =>{

  const {data} = useAgentsNaturalHistoryPageState()
  console.log(':::::::::::::', data)
  
  const classes = useStyles()

  const vulnerabilityGroups= [
    {name: 'VulnerabilityGroup1'},
    {name: 'VulnerabilityGroup2'},
    {name: 'VulnerabilityGroup3'},
    {name: 'VulnerabilityGroup4'},
  
  ]
  const states=[
    {
      name: 'State 1',
      state: ''
    },
    {
      name: 'State 2',
      state: ''
    },
    {
      name: 'State 3',
      state: ''
    },
    {
      name: 'State 4',
      state: ''
    },
    {
      name: 'State 5',
      state: ''
    },
    {
      name: 'State 6',
      state: ''
    },
  ]

  const tableColumns4 = [
    {
      title: 'Variables to configure',
      att: 'name',
      type: 'label'
    }
  ]
  const renderRows = ()=>
    data.map((item)=> (
      <TableRow className={classes.row} key={name}>
        <TableCell className={classes.cell} align="center">
          {item.name}
        </TableCell>
        <TableCell>
          <ConfigTable
            showDelete={false}
            showAddButton={false}
            distributionType="Mobility Group"
            columns={tableColumns4}
            initialItems={states} 
          />
        </TableCell>
      </TableRow>
    ))
  
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
          {renderRows()}
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

export default NestingComponent