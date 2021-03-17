import React from "react";

import { useInputValue } from "../../ui/Input/useInputValue";
import { RadioButton } from "../../ui/RadioButton";
import { VALIDATORS_REGISTER_FORM } from "./validators";

const RegisterForm = () => {
  const email = useInputValue("", VALIDATORS_REGISTER_FORM.email, {
    name: "email",
    type: "email",
    label: "Your Email",
  });
  const name = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "name",
    type: "text",
    label: "Your Name",
  });
  const lastName = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "lastName",
    type: "text",
    label: "Your LastName",
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
    label: "Your Institution",
  });
  const institutionAfiliation = useInputValue(
    "",
    VALIDATORS_REGISTER_FORM.alphabetic,
    {
      name: "institutionAfiliation",
      type: "email",
      label: "Your Institution Afiliation",
    }
  );
  const profession = useInputValue("", VALIDATORS_REGISTER_FORM.alphabetic, {
    name: "profession",
    type: "text",
    label: "Your Profession",
  });
  const date_of_birth = useInputValue("", VALIDATORS_REGISTER_FORM.dateTime, {
    name: "date_of_birth",
    type: "date",
    label: "Your Date of birth",
  });
  const password = useInputValue("", VALIDATORS_REGISTER_FORM.password, {
    name: "password",
    type: "password",
    label: "Your Password",
  });

  /* const passwordVerify = useInputValue("", VALIDATORS_REGISTER_FORM.username, {
    name: "username",
    type: "email",
    label: "Your Email",
  }); */

  return (
    <form>
      <p>I am form</p>
      <RadioButton
        checked={"a" === "a"}
        onChange={() => {}}
        value="a"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
      />
    </form>
  );
};

export default RegisterForm;
