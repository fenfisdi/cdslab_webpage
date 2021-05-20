import React from 'react'
import { Container } from '@material-ui/core'
import AlertCommon from '../../../components/ui/AlertCommon'
import { notificationStrings, sysCellNamesTable, secondaryTabTitles } from '../constants'
import Simpletable from '../../../components/ui/SimpleTable'
import { sysManagementStyles } from './styles'
import SecondaryTabs from '../../../components/ui/SecondaryTabs'
import { SysNotification, SysSimulation } from '../../../components/SysManagement/index'

const SysManagementMainPage = () => {

  const classes = sysManagementStyles()

  function createData(process, time) {
    return { process, time }
  }
  
  const rows = [
    createData('Maximum storage time', 30),
    createData('Notification time before removal', 5),
    createData('Scheduled removal', 1)
  ]

  const titles = ['Process', 'Time(days)']

  const tabsComponents = [
    SysNotification,
    SysSimulation
  ]

  return(
    <>
      <Container maxWidth={'md'}>
        <AlertCommon
          title={notificationStrings.title1}
          message={notificationStrings.message1}
          severity={'info'}
        />
        <div className={classes.sysManagementTableContainer}>
          <Simpletable
            titles={titles}
            rows={rows}
            cellNames={sysCellNamesTable}
          />
        </div>
        <AlertCommon
          title={notificationStrings.title2}
          message={notificationStrings.message2}
          severity={'info'}
        />
        <div className={classes.sysManagementTabsContainer}>
          <SecondaryTabs
            tabTitles={secondaryTabTitles}
            arrayComponents={tabsComponents}
            classes={classes.root}
          />
        </div>
      </Container>
    </>
  )
}

export default SysManagementMainPage