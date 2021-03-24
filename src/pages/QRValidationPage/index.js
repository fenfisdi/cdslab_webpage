import  QR_validation  from '../../components/Register/QRValidation';
import Grid from '@material-ui/core/Grid';

const QRAuthentication =() =>{

    return(
        <Grid container 
            direction="column" 
            spacing={2} 
            alignItems="center"
            justify="center"
            style={{ minHeight: "75vh" }}
            >
            <QR_validation/>
        </Grid>
    );
};

export default QRAuthentication;