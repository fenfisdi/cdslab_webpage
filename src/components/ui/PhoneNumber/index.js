import MuiPhoneNumber from "material-ui-phone-number";
import { Grid, makeStyles } from "@material-ui/core";
import { Input } from "../Input";
const useStyles = makeStyles(() => ({
  formControl: {
    width: "100%",
    marginTop: "16px",
    marginBottom: "8px",
  },
}));

export const PhoneNumber = ({ xs, phoneNumber, phoneExtension }) => {
  const classes = useStyles();
  return (
    <Grid xs={xs} item direction="row" className={classes.formControl}>
      <MuiPhoneNumber
        name="phoneExt"
        label="Ext"
        data-cy="user-phone"
        defaultCountry={"co"}
        regions={["america", "europe", "asia", "oceania", "africa"]}
        required={true}
        disabled={false}
        variant="outlined"
        {...phoneExtension}
        style={{ width: "30%" }}
      />
      <Input
        disabled={false}
        required
        variant="outlined"
        margin="normal"
        autoComplete="phoneNumber"
        InputLabelProps={{
          shrink: true,
        }}
        {...phoneNumber}
        style={{ width: "70%", "margin-top": "0px", "margin-bottom": "0px" }}
      />
    </Grid>
  );
};
