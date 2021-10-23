import {  Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import React  from 'react'
import { ExtraParamsItem } from '../../styles'


export const AgentsReviewMobility = ({data,widthTable='100%'}) => {
  const mobilityGroups = data.mobility_groups || []

  const displayOptimizedMobility =()=>{
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
                    <strong> distribution  </strong>
                  </ExtraParamsItem>
              </TableCell>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> Parameters  </strong>
                  </ExtraParamsItem>
              </TableCell>
            </TableRow>
            {
              mobilityGroups.map((elemnt,i) => (
                <TableRow key={i}>
                    <TableCell style={{textAlign: 'center'}}>
                      <ExtraParamsItem>
                        { elemnt.name || ''}
                      </ExtraParamsItem>
                    </TableCell>
                    <TableCell style={{textAlign: 'center'}}>
                      <ExtraParamsItem>
                        { elemnt?.distribution?.type  || ''}
                      </ExtraParamsItem>
                    </TableCell>
                    <TableCell style={{textAlign: 'center'}}>
                      <ExtraParamsItem>
                        <Table key={1}>   
                          <TableBody>
                            <TableRow>
                              <TableCell style={{textAlign: 'center'}}>
                                  <ExtraParamsItem>
                                    <strong> Parameter  </strong>
                                  </ExtraParamsItem>
                              </TableCell>
                              <TableCell style={{textAlign: 'center'}}>
                                  <ExtraParamsItem>
                                    <strong> Value  </strong>
                                  </ExtraParamsItem>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
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
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Mobility Groups</h1>
      {displayOptimizedMobility()}
    </div> 
  )
}
