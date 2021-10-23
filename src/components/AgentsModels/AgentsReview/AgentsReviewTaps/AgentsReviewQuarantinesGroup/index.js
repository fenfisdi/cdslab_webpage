import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { ExtraParamsItem } from '../../styles'

export const AgentsReviewQuarantinesGroup = ({data,widthTable='100%'}) => {
  const quarantineGroups = data.quarantine_groups || []

  const displayOptimizedParameter =()=>{
    return (
      <Table key={1}>   
          <TableBody>
            <TableRow>
              <TableCell style={{textAlign: 'center'}}>
                  <ExtraParamsItem>
                    <strong> Name  </strong>
                  </ExtraParamsItem>
              </TableCell>
            </TableRow>
            {
              quarantineGroups.map((elemnt,i) => (
                <TableRow key={i}>
                    <TableCell style={{textAlign: 'center'}}>
                      <ExtraParamsItem>
                        { elemnt.name }
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
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Quarantine Groups</h1>
      {displayOptimizedParameter()}
    </div> 
  )
}
