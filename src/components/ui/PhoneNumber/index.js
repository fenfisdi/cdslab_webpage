import 'react-phone-number-input/style.css'
import { Grid, makeStyles } from '@material-ui/core'
import { Input } from '../Input'
const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
    marginTop: '16px',
    marginBottom: '8px'
  }
}))

export const PhoneNumber = ({ xs, phoneNumber }) => {
  const classes = useStyles()
  return (
    <Grid xs={xs} item direction='row' className={classes.formControl}>
      {/* <PhoneInput
        placeholder="Enter phone number"
        {...phoneNumber}
        variant="outlined"
      /> */}
      {/*  <MuiPhoneNumber
        name="phoneExt"
        label="Ext"
        data-cy="user-phone"
        defaultCountry={"co"}
        regions={["america"]}
        required={true}
        disabled={false}
        variant="outlined"
        excludeCountries={["us"]}
        {...phoneExtension}
        style={{ width: "30%" }}
      />*/}
      <Input
        required
        autoComplete='phoneNumber'
        InputLabelProps={{
          shrink: true
        }}
        {...phoneNumber}
        style={{ width: '100%', 'margin-top': '0px', 'margin-bottom': '0px' }}
      />
    </Grid>
  )
}
