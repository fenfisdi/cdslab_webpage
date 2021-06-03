import { Button, makeStyles, Table, TableBody, TableRow,TableCell } from '@material-ui/core'
import React from 'react'
import CompartmentalButton from '../CompartmentalButton'
import GetAppIcon from '@material-ui/icons/GetApp'
import { ExtraParamsItem } from './styles'

const useStyles = makeStyles(() => ({
  rowColor: {
    background: '#ECEFF1',
  },
  buttonDownload:{
    background: '#ECEFF1',
    color: '#00838F',
    padding: '7px',
    borderRadius: '6px',
    marginTop: '10px',
    fontSize: '20px',
    width: '25%',
    display: 'block',
    margin: '0 auto'
  },
  textoDownload:{
    marginLeft: '10px'
  }
}))

const ReviewSimulationSettings =({simulation,executeRequest, buttonText='', showButton=false,showButtonDownload=false})=>{
  
  const classes = useStyles()

  const displayParameters=(parameters)=>{
    return parameters.map( parameter => {
      console.log(parameter)
      return(
        <Table key={parameter.label}>   
          <TableBody>
            <TableRow>
              <TableCell>
                {parameter.type=='fixed' 
                  ?
                  <ExtraParamsItem>
                    <strong> {parameter.label} : </strong>{parameter.value}
                  </ExtraParamsItem>
                  :
                  displayOptimizedParametersValue(parameter)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
    })
  } 

  const displayOptimizedParametersValue =(parameter)=>{
    return (<ExtraParamsItem>
      <strong>min Value : </strong>{ parameter.min_value } ,
      <strong>max Value : </strong>{ parameter.max_value } 
    </ExtraParamsItem>)
  }

  const displayStateVariables=(stateVariables)=>{
    return stateVariables.map( variable => {
      return(
        <Table key={variable.label}>   
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>{variable.label} :</strong> {variable.value}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
    })
  } 

  return (

    <div>
      <Table>
        <TableBody>
          <TableRow className={classes.rowColor}>
            <TableCell>
              <strong>Simulation Name:</strong>
            </TableCell>
            <TableCell>
              {simulation.name || ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Type of simulation:</strong>
            </TableCell>
            <TableCell>
              {simulation.parameter_type || ''}
            </TableCell>
          </TableRow>
          <TableRow className={classes.rowColor}>
            <TableCell>
              <strong>Type Model:</strong>
            </TableCell>
            <TableCell>
              {simulation.modelName || ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Parameters:</strong>
            </TableCell>
            <TableCell>
              {displayParameters(simulation.parameters_limits || [])}
            </TableCell>
          </TableRow>
          <TableRow className={classes.rowColor}>
            <TableCell>
              <strong>State Variable:</strong>
            </TableCell>
            <TableCell>
              {displayStateVariables(simulation.state_variable_limits || [])}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Data Source:</strong>
            </TableCell>
            <TableCell>
              {simulation.fileName}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {executeRequest && showButton && <CompartmentalButton
        disabled={false}
        onClick={()=>{executeRequest()}}
        justify="center"
        alignItems="center"
        text={buttonText}
      />}
      {showButtonDownload && (
        <div className={classes.buttonDownload}>
          <span className={classes.textoDownload}>Dowdload</span>
          <Button
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(simulation)
            )}`}
            download="simulation.json"
            title='Download Info'
          >
            <GetAppIcon style={{color: '#2394BC',fontSize: '50px',marginLeft: '10px'}}/>
          </Button>
        </div>  
      )
      }
    </div>
  )
}

export default ReviewSimulationSettings