import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { ExtraParamsItem } from '../../styles'

export const AgentsReviewAgeGroup = ({data,widthTable='100%'}) => {
  const ageGroups = data.age_groups || []

  const displayOptimizedDate =()=>{
    return (
      <Table key={1}>   
          <TableBody>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> Name  </strong>
                  </ExtraParamsItem>
              </TableCell>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> Population_Percentage  </strong>
                  </ExtraParamsItem>
              </TableCell>
            </TableRow>
            {
              ageGroups.map((elemnt,i) => (
                <TableRow key={i}>
                    <TableCell style={{textAlign: 'center'}}>
                      <ExtraParamsItem>
                        { elemnt.name }
                      </ExtraParamsItem>
                    </TableCell>
                    <TableCell style={{textAlign: 'center'}}>
                      <ExtraParamsItem>
                        { elemnt.population_percentage }
                      </ExtraParamsItem>
                    </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
    )
  }



  return (
    <div tyle={{ width: widthTable}}>
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Age Groups</h1>
      {displayOptimizedDate()}
    </div> 
  )
}
