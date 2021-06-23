import React from 'react'
import { Container, CardContent, StyledCard, Title } from './style'
import ActionsZone from '../AgentsActionZone'
import IconButton from '@material-ui/core/IconButton'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'



export default function AgentsDistributionCard({ item, index, handleSettings,setComponentChildren }) {
  
  // const getInformation = () =>
  //   item.description ? item.description : 'No info'

  return (
    <Container>
      <StyledCard onClick={() => setComponentChildren(item)}>
        <CardContent>
          <Title>{item}</Title>
          {/* <ActionsZone
            showDelete={false}
            showCheck={false} 
            showConfig={false}
            index={index}
            isConfigured={item.state === 'CONFIGURED'}
            handleSettings={handleSettings}
          /> */}
        </CardContent>
      </StyledCard>
      {/* <Tooltip
        TransitionComponent={Zoom}
        title={
          <h1 style={{ 'font-size': '12px', 'line=height': '15px' }}>
            {getInformation()}
          </h1>
        }
      >
        <IconButton color="primary" aria-label="Information" component="span">
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip> */}
    </Container>
  )
}
