import  QRvalidation  from '../../components/Register/QRValidation';
import Grid from '@material-ui/core/Grid';

const QRAuthentication =() =>{

    return(
        <Grid container 
            direction="column" 
            alignItems="center"
            justify="center"
            style={{ marginTop: "10%" }}
            >
            <h1>CDSLAB</h1>
            <QRvalidation/>
        </Grid>
    );
};

export default QRAuthentication;