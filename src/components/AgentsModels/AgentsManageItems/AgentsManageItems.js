import { Button, Grid } from '@material-ui/core'
import React from 'react'
import TextFieldCommon from '../../ui/TextFieldCommon'
import configIcon from '../../../assets/images/settings_button.svg'
import { AgentsManageItemsStyles } from './styles'

const AgentsManageItems = ({
  title,
  itemArray,
  handleDeleteItem,
  handleCheckItem,
  handleConfigItem,
  handleAddItem
}) => {
  const classes = AgentsManageItemsStyles()

  return (
    <>
      <div className={classes.titleContainer}>
        <strong>{ title }</strong>
      </div>
      { itemArray.map(( item, index ) => (
        <div key={index} className={classes.itemContainerClass}>
          <Grid container>
            <Grid xs={1}>
              <h2 className={classes.indexClass}><strong>#{ index }</strong></h2>
            </Grid>
            <Grid xs={8}>
              <TextFieldCommon
                label={''}
                name={item.name}
                variant={'outlined'}
                disabled={false}
                value={item.value}
                required={false}
                inputClass={classes.inputClass}
                handleChange={''}
              />
            </Grid>
            <Grid xs={1}>
              <span onClick={handleConfigItem} className={classes.icon}>
                <img className={classes.iconClass} src={configIcon}></img>
              </span>
            </Grid>
            <Grid xs={1}>
              <span onClick={handleCheckItem} className={classes.icon}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className={`${classes.iconClass} svg-inline--fa fa-check fa-w-16`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>
              </span>
            </Grid>
            <Grid xs={1}>
              <span onClick={handleDeleteItem} className={classes.icon}>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className={`${classes.iconClass} svg-inline--fa fa-trash-alt fa-w-14`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z">
                  </path>
                </svg>
              </span>
            </Grid>
          </Grid>
        </div>
      ))}
      <Button
        onClick={handleAddItem}
        className={classes.addButton}
      >
        Add
      </Button>
    </>
  )
}

export default AgentsManageItems
