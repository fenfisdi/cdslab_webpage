import React from 'react'
import { Container, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { notificationStrings, sysCellNamesTable, secondaryTabTitles } from '../constants'
import Simpletable from '../../../components/ui/SimpleTable'
import AlertCommon from '../../../components/ui/AlertCommon'
import SecondaryTabs from '../../../components/ui/SecondaryTabs'
import { useSysManagementState } from './state'

const SysManagementMainPage = () => {

  const [
    classes,
    rows,
    titles,
    tabsComponents
  ] = useSysManagementState()

  return(
    <>
      <Container maxWidth={'sm'}>
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
            tabsClass={classes.root}
            paperClass={classes.paper}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </Container>
    </>
  )
}

export default SysManagementMainPage