import { makeStyles, Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { ExtraParamsItem } from '../../styles'

const useStyles = makeStyles(() => ({
  rowColor: {
    background: '#ECEFF1',
  }
}))


export const AgentsReviewNewConfiguration = ({data,widthTable='100%'}) => {
  console.log(data)
  const classes = useStyles()
  const configuration = data.configuration || []

  const displayOptimizedDate =(parameter)=>{
    return (
      <Table key={1}>   
          <TableBody>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> Start  </strong>
                  </ExtraParamsItem>
              </TableCell>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> End  </strong>
                  </ExtraParamsItem>
              </TableCell>
            </TableRow>
              <TableRow>
                  <TableCell style={{textAlign: 'center'}}>
                    <ExtraParamsItem>
                      { parameter?.start || ''}
                    </ExtraParamsItem>
                  </TableCell>
                  <TableCell style={{textAlign: 'center'}}>
                    <ExtraParamsItem>
                      { parameter?.end  || ''}
                    </ExtraParamsItem>
                  </TableCell>
              </TableRow>
          </TableBody>
        </Table>
    )
  }

  const displayOptimizedBoxSize =(parameter)=>{
    return (
      <Table key={1}>   
          <TableBody>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> Horizontal :  </strong> 
                  </ExtraParamsItem>
              </TableCell>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> Vertical :  </strong>
                  </ExtraParamsItem>
              </TableCell>
            </TableRow>
              <TableRow>
                  <TableCell style={{textAlign: 'center'}}>
                    <ExtraParamsItem>
                      { parameter?.horizontal || '' }
                    </ExtraParamsItem>
                  </TableCell>
                  <TableCell style={{textAlign: 'center'}}>
                    <ExtraParamsItem>
                       { parameter?.vertical || ''}
                    </ExtraParamsItem>
                  </TableCell>
              </TableRow>
          </TableBody>
        </Table>
    )
  }



  return (
    <div tyle={{ width: widthTable}}>
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>New Configurarion</h1>
      <Table>
        <TableBody>
          <TableRow className={classes.rowColor}>
            <TableCell style={{textAlign: 'center'}}>
              <strong>Parameter</strong>
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              <strong>Value</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: 'center'}}>
              Name
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {configuration.name || ''}
            </TableCell>
          </TableRow>
          <TableRow className={classes.rowColor}>
            <TableCell style={{textAlign: 'center'}}>
              Distance units
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {configuration.distance_units || ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: 'center'}}>
              Iteration number
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {configuration.iteration_number || ''}
            </TableCell>
          </TableRow>
          <TableRow className={classes.rowColor}>
            <TableCell style={{textAlign: 'center'}}>
              Iteration time units
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {configuration.iteration_time_units || ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: 'center'}}>
              Population number
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {configuration.population_number || ''}
            </TableCell>
          </TableRow>
          <TableRow className={classes.rowColor}>
            <TableCell style={{textAlign: 'center'}}>
              Hospital capacity
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {configuration.hospital_capacity || ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: 'center'}}>
              Icu capacity
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {configuration.icu_capacity || ''}
            </TableCell>
          </TableRow>
          <TableRow className={classes.rowColor}>
            <TableCell style={{textAlign: 'center', width: '50%'}}>
              Date
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {displayOptimizedDate(configuration.interval_date)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: 'center', width: '50%'}}>
              Box size
            </TableCell>
            <TableCell style={{textAlign: 'center'}}>
              {displayOptimizedBoxSize(configuration.box_size)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
