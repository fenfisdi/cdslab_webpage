import  QRImage  from '../../components/Register/QRcode';
import  QRvalidation  from '../../components/Register/QRValidation';
import Grid from '@material-ui/core/Grid';

const QRrender = () => {

    return(
        <Grid container 
            direction="column" 
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
            >
            <QRImage /> 
            <QRvalidation/>
        </Grid>    
    )
}

export default QRrender;
