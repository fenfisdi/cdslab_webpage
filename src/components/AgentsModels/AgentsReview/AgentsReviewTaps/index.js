import { AppBar, Box, Tab, Tabs, Typography, useTheme } from '@material-ui/core'
import React, {Fragment} from 'react'
import SwipeableViews from 'react-swipeable-views'
import { AgentsReviewAgeGroup } from './AgentsReviewAgeGroup'
import { AgentsReviewMobility } from './AgentsReviewMobilityGroup'
import { AgentsReviewNewConfiguration } from './AgentsReviewNewConfiguration'
import { AgentsReviewQuarantinesGroup } from './AgentsReviewQuarantinesGroup'
import { AgentsReviewSusceptibilityGroup } from './AgentsReviewSusceptibilityGroup'
import { AgentsReviewVulnerabilityGroup } from './AgentsReviewVulnerabilityGroup'
import { useAgentsReview } from './state'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
} 


const AgentsReviewTaps = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  const {    
    data
  }= useAgentsReview()
  
  return (
    <div className="container" style={{maxWidth: '800px'}}>
        <Box sx={{ bgcolor: 'background.paper', width: 500}}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="default"
              variant="scrollable"
              aria-label="full width tabs example"
            >
              <Tab label="New configuration" {...a11yProps(0)} />
              <Tab label="Age group" {...a11yProps(1)} />
              <Tab label="Mobility group" {...a11yProps(2)} />
              <Tab label="Suceptibility group" {...a11yProps(3)} />
              <Tab label="Vulnerability group" {...a11yProps(4)} />
              <Tab label="Disease state" {...a11yProps(5)} />
              <Tab label="Natural history" {...a11yProps(6)} />
              <Tab label="Quarantine group" {...a11yProps(7)} />
              <Tab label="Cyclic quarantine restrictions" {...a11yProps(8)} />
              <Tab label="Quarantine by tracing variables" {...a11yProps(9)} />
              <Tab label="Initial population" {...a11yProps(10)} />
              <Tab label="Variable to config" {...a11yProps(11)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <AgentsReviewNewConfiguration data={data} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <AgentsReviewAgeGroup data={data} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <AgentsReviewMobility data={data} />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <AgentsReviewSusceptibilityGroup data={data}/>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <AgentsReviewVulnerabilityGroup data={data}/>
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
              <AgentsReviewQuarantinesGroup data={data}/>
            </TabPanel>
            <TabPanel value={value} index={8} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={9} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={10} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={11} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </Box>
    </div>  
    )
}

export default AgentsReviewTaps