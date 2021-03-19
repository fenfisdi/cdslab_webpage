import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid, RadioGroup } from "@material-ui/core";
import { RadioButton } from "../RadioButton";
export const RadioGroups = ({
  options = [],
  value,
  title,
  direction,
  onChange,
  style,
}) => {
  return (
    <FormControl component="fieldset" style={style}>
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup
        value={value}
        onChange={onChange}
        aria-label={title}
        name="customized-radios"
      >
        <Grid container item direction={direction || "column"}>
          {options.map((option) => {
            const { value, label } = option;
            return (
              <FormControlLabel
                value={value}
                control={<RadioButton />}
                label={label}
              />
            );
          })}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};
