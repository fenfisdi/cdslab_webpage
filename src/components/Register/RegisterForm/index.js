import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { Input } from "../../ui/Input";
import { useInputValue } from "../../ui/Input/useInputValue";
import { checkTypeNumber, VALIDATORS_REGISTER_FORM } from "./validators";
import { RadioGroups } from "../../ui/RadioGroups";
import { TitleComponent } from "../../ui/Title";
import theme from "../../../styles/theme";
import { useRegisterFormStyles } from "./styles";
import { PhoneNumber } from "../../ui/PhoneNumber";
import { PasswordChecker } from "../PasswordChecker";
import { useRadioGroupsValue } from "../../ui/RadioGroups/useRadioGroupsValue";
import { SelectComponent } from "../../ui/Select";
import { useSelectValue } from "../../ui/Select/useSelectValue";

const RegisterForm = () => {
  const classes = useRegisterFormStyles(theme);

  /******* form fields  */
  const email = useInputValue("", VALIDATORS_REGISTER_FORM.email, {
    name: "email",
    type: "email",
    label: "Email",
  });
  const name = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "name",
    type: "text",
    label: "Name",
  });
  const lastName = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "lastName",
    type: "text",
    label: "Last Name",
  });

  const genre = useSelectValue("", VALIDATORS_REGISTER_FORM.genre, {
    options: [
      {
        value: "female",
        label: "Female",
      },
      {
        value: "male",
        label: "male",
      },
      {
        value: "other",
        label: "other",
      },
    ],
    title: "Gender",
  });

  const institution = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "institution",
    type: "text",
    label: "Institution",
  });
  const institutionAfiliation = useInputValue(
    "",
    VALIDATORS_REGISTER_FORM.alphabetic,
    {
      name: "institutionAfiliation",
      type: "text",
      label: "Institution Afiliation",
    }
  );
  const profession = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "profession",
    type: "text",
    label: "Profession",
  });
  const date_of_birth = useInputValue("", VALIDATORS_REGISTER_FORM.dateTime, {
    name: "date_of_birth",
    type: "date",
    label: "birth date",
  });
  const phoneNumber = useInputValue("", VALIDATORS_REGISTER_FORM.phone, {
    name: "phoneNumber",
    type: "text",
    label: "phone Number",
    onKeyDown: (event) => {
      return checkTypeNumber(event);
    },
  });
  const phoneExtension = useInputValue("", VALIDATORS_REGISTER_FORM.ext, {
    name: "phoneExtension",
    type: "text",
    label: "phone Extension",
    onKeyDown: (event) => {
      return checkTypeNumber(event);
    },
  });
  const password = useInputValue("", VALIDATORS_REGISTER_FORM.password, {
    name: "password",
    type: "password",
    label: "Password",
  });

  /********************* */
  console.log("::::::::::::>", genre);
  return (
    <Paper className={classes.formBody}>
      <Grid xs={12}>
        <TitleComponent
          justify={"center"}
          alignItems={"center"}
          title={"Registro"}
        />
        <Grid item container xs={12} spacing={2}>
          <Grid item container xs={4} direction="column">
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="email"
              {...email}
            />
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="name"
              {...name}
            />
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="last name"
              {...lastName}
            />
          </Grid>
          <Grid item container xs={4} direction="column">
            <SelectComponent {...genre} />
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="institution"
              {...institution}
            />
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="institutionAfiliation"
              {...institutionAfiliation}
            />
          </Grid>
          <Grid item container xs={4} direction="column">
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              margin="normal"
              autoComplete="profession"
              {...profession}
            />
            <Input
              disabled={false}
              required
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              autoComplete="date_of_birth"
              {...date_of_birth}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} direction="column">
          <PhoneNumber
            phoneNumber={phoneNumber}
            phoneExtension={phoneExtension}
          />
          <Input
            disabled={false}
            required
            fullWidth
            variant="outlined"
            margin="normal"
            autoComplete="password"
            {...password}
          />
          <PasswordChecker
            checkValue={password.value}
            errorText={"Incorrect password.. "}
            eventEmmiter={(value) => {
              console.log("isVeri:::>", value);
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterForm;
