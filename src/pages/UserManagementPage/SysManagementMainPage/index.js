import React from 'react'
import { Container } from '@material-ui/core'

import { notificationStrings, sysCellNamesTable, secondaryTabTitles } from '../constants'
import Simpletable from '../../../components/ui/SimpleTable'
import AlertCommon from '../../../components/ui/AlertCommon'
import SecondaryTabs from '../../../components/ui/SecondaryTabs'
import SnackBarCommon from '../../../components/ui/SnackBarCommon'
import { useSysManagementState } from './state'
import FullWidthTabs from '../../../components/Taps'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import userSvg from '../../../assets/images/management/users_color.svg'
import toolsSVG from '../../../assets/images/management/SYSManagement_SVG.svg'

const SysManagementMainPage = () => {

  const [
    classes,
    tableRows,
    tableTitles,
    tabsComponents,
    updateSysManagementTableDataSuccess,
    updateSysManagementTableDataFailed,
    isRequiredMessage,
    isRequired,
    updateSysManagementTemplateEditorSuccess,
    updateSysManagementTemplateEditorFailed,
    handleComponentForTable,
    handleValidations,
    handleCloseSnack
  ] = useSysManagementState()

  const tabs = [
    {
      id: 1,
      label: 'Users Management',
      path:  'usersManagement',
      disabled : true,
      icon: userSvg,
      iconType: 'svg',
      width: 70,
      height: 45
    },
    {
      id: 2,
      label: 'Sys Management',
      path: 'sysManagement',
      disabled : false,
      icon: toolsSVG,
      iconType: 'svg',
      width: 70,
      height: 50
    },
  ]

  return(
    <>
      <FullWidthTabs tabs={tabs} idTab={2} />
      <div className={classes.generalContainer}>
        <Container maxWidth={'sm'}>
          <AlertCommon
            title={notificationStrings.title1}
            message={notificationStrings.message1}
            severity={'info'}
          />
          <div className={classes.sysManagementTableContainer}>
            <Simpletable
              titles={tableTitles}
              rows={tableRows}
              cellNames={sysCellNamesTable}
              param={'time'}
              handleComponent={handleComponentForTable}
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
            <CompartmentalButton 
              justify='flex-end'
              alignItems='center'
              text='Save changes'
              onClick={handleValidations}
              disabled={false}
              icon='fas fa-save'
            />
          </div>
        </Container>
      </div>
      <SnackBarCommon
        success={updateSysManagementTableDataSuccess || updateSysManagementTemplateEditorSuccess}
        error={updateSysManagementTableDataFailed || isRequired || updateSysManagementTemplateEditorFailed}
        handleCloseSnack={handleCloseSnack}
        successMessage={'Proceso exitoso'}
        errorMessage={isRequiredMessage}
      />
    </>
  )
}

export default SysManagementMainPage