import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "16px",
    marginTop: "16px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectComponent = ({
  value,
  options = [],
  title,
  onChange,
  onOpen,
  onClose,
  error,
  helperText,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} error={error}>
      <InputLabel id="selectComponent">{title}</InputLabel>
      <Select
        labelId="selectComponent"
        id="selectComponent-simple"
        value={value}
        onChange={onChange}
        onOpen={onOpen}
        onClose={onClose}
      >
        {options.map((option) => {
          const { value: optionValue, label } = option;
          return <MenuItem value={optionValue}>{label}</MenuItem>;
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
