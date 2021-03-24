import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { Input } from "../../ui/Input";

const QR_validation = () => {

    return(
        <>
            <Grid item xs={12}>
                <h4>Please entered your code below</h4>
            </Grid>
            <Grid item xs={12}>
                <Input
                    disabled={false}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    //{...email}
                    />
            </Grid>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            className={{}}
            disabled={false}
            >
            Continue
            </Button>
        </>
  );
};

export default QR_validation;
