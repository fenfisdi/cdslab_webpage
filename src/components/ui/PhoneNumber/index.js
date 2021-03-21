import MuiPhoneNumber from "material-ui-phone-number";
import { Grid } from "@material-ui/core";
import { Input } from "../Input";
export const PhoneNumber = ({
  val,
  validators = [],
  extras,
  phoneNumber,
  phoneExtension,
}) => {
  return (
    <Grid
      item
      container
      direction="row"
      style={{ marginTop: "16px", marginBottom: "8px" }}
    >
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
        style={{ width: "120px" }}
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
        style={{ width: "46%", "margin-top": "0px", "margin-bottom": "0px" }}
      />
    </Grid>
  );
};
