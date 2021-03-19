import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { Input } from "../../ui/Input";
import { useInputValue } from "../../ui/Input/useInputValue";
import { VALIDATORS_REGISTER_FORM } from "./validators";
import { RadioGroups } from "../../ui/RadioGroups";
import { TitleComponent } from "../../ui/Title";
import theme from "../../../styles/theme";
import { useRegisterFormStyles } from "./styles";
import { PhoneNumber } from "../../ui/PhoneNumber";

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
  const phoneNumber = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "phoneNumber",
    type: "text",
    label: "phone Number",
  });
  /*  const sex = useInputValue(
    '',
    VALIDATORS_REGISTER_FORM.username, {
    name: 'sex',
    type: 'email',
    label: 'Your Email', 
  }) */
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
  const password = useInputValue("", VALIDATORS_REGISTER_FORM.password, {
    name: "password",
    type: "password",
    label: "Password",
  });

  /* const passwordVerify = useInputValue("", VALIDATORS_REGISTER_FORM.username, {
    name: "username",
    type: "email",
    label: "Your Email",
  }); */
  /********************* */

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
            <RadioGroups
              options={[
                {
                  value: "female",
                  label: "Female",
                },
                {
                  value: "male",
                  label: "male",
                },
              ]}
              value={"female"}
              title={"Sex"}
              direction="row"
              onChange={(event) => {
                console.log("radio button:::>", event.target.value);
              }}
              style={{ marginTop: "20px" }}
            />
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
          <PhoneNumber phoneNumber={phoneNumber} />
          <Input
            disabled={false}
            required
            fullWidth
            variant="outlined"
            margin="normal"
            autoComplete="password"
            {...password}
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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterForm;
