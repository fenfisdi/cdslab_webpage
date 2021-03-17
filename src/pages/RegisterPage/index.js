import React, { useEffect, useState } from "react";
import RegisterForm from "../../components/Register/RegisterForm";
import { useStore } from "../../store/storeContext";
import { useUserActions } from "../../actions/userActions";
import { useRegisterActions } from "../../actions/registerActions";
import { Button, Grid } from "@material-ui/core";
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
  const { save } = useRegisterActions(dispatch);
  const [window, setWindow] = useState(1);
  const classes = useRegisterStyles(theme);

  useEffect(() => {
    //console.log(data, loading, error);
  }, []);

  useEffect(() => {
    console.log("Data updated ", data); // dummy example
  }, [data]);

  // dummy example
  const handleClick = (e) => {
    e.preventDefault();
    registerUser({
      name: "Juan",
      lastname: "Chaverra",
    });
  };

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-star">
      <RegisterForm />
      {/* {window === 1 && <RegisterForm />}
      {window === 2 && <p>Estoy en la ventana dos</p>}
      <Button variant="contained" color="primary" onClick={handleClick}>
        Test reducer
      </Button> */}
    </Grid>
  );
};

export default RegisterPage;
