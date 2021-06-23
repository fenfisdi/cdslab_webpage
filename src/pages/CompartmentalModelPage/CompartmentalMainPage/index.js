import { Grid, Paper } from '@material-ui/core'
import { isNull } from 'lodash'
import React, { Fragment, useContext } from 'react'
import { useHistory } from 'react-router'
import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { OPTIONS_COMPARTMENTAL_MAIN } from '../../../constants/compartmental'
import { usePathBreadCrums } from '../../../helpers/usePathBreadCrums'
import { useCompartmentalMainPageState } from './state'
import { useCompartmentalMainPageStyles, CompartmentalMainPageContainer, CompartmentalMainPageCards } from './styles'
import {languageContext} from '../../../config/languageContext'

const CompartmentalMainPage = () => {

  const classes = useCompartmentalMainPageStyles()
  const history = useHistory()
  const { predefinedModelsList } = useCompartmentalMainPageState()
  const { handlePathBreadCrums } = usePathBreadCrums()
  const {t} = useContext(languageContext)

  const handleEventEmitted = (cardData) => {
    handlePathBreadCrums(cardData.ruta, t(cardData.name))
    cardData.url && history.push(cardData.url)
  }
  return (
    <CompartmentalMainPageContainer>
      {isNull(predefinedModelsList) && <Fragment>
        <Grid container item xs={9} justify="center" alignItems="center">
          <Paper className={classes.formBody}>
            <p>
              Los modelos compartimentales son modelos dinámicos útiles para describir la transmisión de enfermedades muy usados en epidemiología.
              Ellos dividen la población en compartimentos, los cuales corresponden a una variable de estado que indica la cantidad de individuos
              que se encuentran en una etapa específica de la enfermedad <sup><a href="https://paperpile.com/c/GKx5pD/vLID">1</a></sup>. También
              realizan supuestos sobre la naturaleza y velocidad a la cual se mueven de un compartimento a otro en el tiempo
              <sup><a href="https://paperpile.com/c/GKx5pD/PGRg">2</a></sup>; y son útiles para predecir tendencias y evaluar medidas de control
              <sup><a href="https://paperpile.com/c/GKx5pD/0TUf">3</a></sup>.
              <br />
              <br />
              En estos modelos se asume que:<sup><a href="https://paperpile.com/c/GKx5pD/bQoV">4</a></sup>
              <br />
              <br />
              <ol>
                <li>
                  Hay una mezcla homogénea de la población en el sentido de que la probabilidad de que un individuo haga contacto con todos los
                  otros individuos de la población es la misma independientemente del compartimiento al que pertenezcan, en otras palabras, todos
                  los individuos están igualmente distribuidos en el espacio.
                </li>
                <li>
                  Todos los individuos susceptibles son igualmente susceptibles.
                </li>
                <li>
                  Todos los individuos infecciosos son igualmente infecciosos independientemente de cuándo fue infectado un individuo o cuánto
                  tiempo lleva infectado.
                </li>
              </ol>
              <br />
              <br />
              Para una mayor comprensión comprensión de los modelos compartimentales usados en esta plataforma y sus bases conceptuales,
              por favor remítase a: <a href="https://fenfisdi.github.io/cdslab/compartimentales.html">FEnFiSDi - Modelos compartimentales</a>.
            </p>
          </Paper>
        </Grid>

        <CompartmentalMainPageCards>
          <ModelCard
            options={OPTIONS_COMPARTMENTAL_MAIN}
            eventEmitted={(cardData) => handleEventEmitted(cardData)}
          />
        </CompartmentalMainPageCards>
      </Fragment>}
    </CompartmentalMainPageContainer>
  )
}

export default CompartmentalMainPage
