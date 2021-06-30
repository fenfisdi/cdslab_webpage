import React from 'react'
import { Container, CardContent, Helper, StyledCard, Title } from './styles'
import IconButton from '@material-ui/core/IconButton'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import { makeStyles } from '@material-ui/core/styles'
import ActionsZone from '../ActionsZone'

const useStyles = makeStyles((theme) => ({
  tooltip: {
    fontSize: '20px'
  }
}))

export default function DistributionCard({ item, index, handleSettings }) {
  const classes = useStyles()
  const getInformation = () => item.description ? item.description : 'No info'

  return (
    <Container>
      <StyledCard>
        <CardContent>
          <Title>{item.name}</Title>
          <ActionsZone
            showDelete={false}
            index={index}
            isConfigured={item.state === 'CONFIGURED'}
            handleSettings={handleSettings}
          />
        </CardContent>
      </StyledCard>
      <Tooltip
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
      </Tooltip>
    </Container>
  )
}
