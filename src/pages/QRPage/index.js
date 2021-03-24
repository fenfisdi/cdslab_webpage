import  QRImage  from '../../components/Register/QRcode';
import  QR_validation  from '../../components/Register/QRValidation';
import Grid from '@material-ui/core/Grid';

const QRrender = () => {

    return(
        <Grid container 
            direction="column" 
            spacing={2} 
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
            >
            <QRImage />
            <QR_validation/>
        </Grid>    
    )
}

export default QRrender;
