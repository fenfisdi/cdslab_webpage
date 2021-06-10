import { Button, makeStyles, Table, TableBody, TableRow,TableCell } from '@material-ui/core'
import React from 'react'
import CompartmentalButton from '../CompartmentalButton'
import GetAppIcon from '@material-ui/icons/GetApp'
import { ExtraParamsItem } from './styles'
import { useDomParse } from '../../../helpers/useDomParse'
const useStyles = makeStyles(() => ({
  rowColor: {
    background: '#ECEFF1',
  },
  ContainerDownload: {
    marginTop: '20px',
    width: '20%',
    display: 'block',
    margin: '0 auto',
  },
  buttonDownload:{
  },
  textoDownload:{
    marginLeft: '10px'
  }
}))

const ReviewSimulationSettings =({simulation,executeRequest, buttonText='', showButton=false,showButtonDownload=false})=>{
  
  const classes = useStyles()
  const {handleDomParse } = useDomParse()

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
                    <strong> {capitalLetter(parameter.label)} ({handleDomParse(parameter.representation)}) : </strong> <p> &nbsp; {parameter.value}</p> 
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
      <strong>{capitalLetter(parameter.label)} ({handleDomParse(parameter.representation)}) = </strong>
      <br />
      <strong> min Value : </strong> <span>&nbsp; { parameter.min_value } </span>,
      <strong> max Value : </strong> <span>&nbsp; { parameter.max_value }</span> 
    </ExtraParamsItem>)
  }
  const capitalLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const displayStateVariables=(stateVariables)=>{
    return stateVariables.map( variable => {
      return(
        <Table key={variable.label}>   
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>{capitalLetter(variable.label)} ({handleDomParse(variable.representation)}) : &nbsp; </strong> {variable.value}
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
        <div className={classes.ContainerDownload}>
          <Button
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(simulation)
            )}`}
            download="simulation.json"
            title='Download Info'
            variant="contained"
            className={classes.buttonDownload}
            endIcon={<GetAppIcon style={{color: '#2394BC', fontSize:'20px'}}/>}
          >
            Download
          </Button>
        </div>
      )
      }
    </div>
  )
}

export default ReviewSimulationSettings