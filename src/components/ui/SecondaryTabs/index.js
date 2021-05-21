import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Paper } from '@material-ui/core'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const SecondaryTabs = ({tabTitles, arrayComponents, tabsClass,
  paperClass}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <AppBar color={'transparent'} position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {tabTitles.map((tabTitle, index) => (
            <Tab className={tabsClass} key={index} label={tabTitle} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      { arrayComponents.map((Component, index) => (
        (index === value) &&
        <Paper className={paperClass}>
          <Component key={index} value={value} index={index}/>
        </Paper>
      ))
      }
    </div>
  )
}

export default SecondaryTabs