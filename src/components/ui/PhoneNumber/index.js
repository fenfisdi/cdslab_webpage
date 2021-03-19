import MuiPhoneNumber from "material-ui-phone-number";
import {
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Input } from "../Input";
export const PhoneNumber = ({ val, validators = [], extras, phoneNumber }) => {
  return (
    <Grid item container direction="row">
      {/* <MuiPhoneNumber
        name="phone"
        label="Phone Number"
        data-cy="user-phone"
        defaultCountry={"co"}
        onChange={(val) => {
          console.log(val);
        }}
        regions={["america", "europe", "asia", "oceania", "africa"]}
        required={true}
        variant="outlined"
      >
        <Input
          disabled={false}
          required
          fullWidth
          variant="outlined"
          margin="normal"
          autoComplete="phoneNumber"
          {...phoneNumber}
        />
      </MuiPhoneNumber> */}
      <MuiPhoneNumber
        name="phone"
        label="Ext"
        data-cy="user-phone"
        defaultCountry={"co"}
        onChange={(val) => {
          console.log(val);
        }}
        regions={["america", "europe", "asia", "oceania", "africa"]}
        required={true}
        variant="outlined"
      />
      <Input
        disabled={false}
        required
        fullWidth
        variant="outlined"
        margin="normal"
        autoComplete="phoneNumber"
        InputLabelProps={{
          shrink: true,
        }}
        {...phoneNumber}
      />
    </Grid>
  );
};
