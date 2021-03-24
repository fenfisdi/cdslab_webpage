import React, { useEffect } from "react";
import RegisterForm from "../../components/Register/RegisterForm";
import { useStore } from "../../store/storeContext";
import { useUserActions } from "../../actions/userActions";
import { Grid } from "@material-ui/core";
import { useRegisterStyles } from "./styles";
import theme from "../../styles/theme";

const RegisterPage = () => {
  const {
    state: {
      register: { data, loading, error },
    },
    dispatch,
  } = useStore();
  const { registerUser } = useUserActions(dispatch);
  const classes = useRegisterStyles(theme);

  useEffect(() => {
    if (data && !error) {
      const { data: responseDate } = data;
      console.log("Data loader ", responseDate); // dummy example
    }
    if (error) {
      console.log(":::::::error", error);
    }
  }, [data, error]);

  // dummy example
  const sendForm = (object) => {
    console.log("::data send", object);
    registerUser(object);
  };

  return (
    <Grid
      xs={12}
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.body}
    >
      <RegisterForm eventEmitter={sendForm} />
    </Grid>
  );
};

export default RegisterPage;
