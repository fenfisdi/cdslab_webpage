import SvgNote from '../assets/icons/SvgNote'
import SvgPlus from '../assets/icons/SvgPlus'

export const OPTIONS_AGENTS_MAIN = [
  {
    titleIcon: SvgPlus,  
    name: 'New configuration',
    indetifier: 'new_simulation',
    url: 'agentsModels/newConfiguration',
    ruta: 'newConfiguration'
  },
  {
    titleIcon:SvgNote,
    name: 'My simulations',
    indetifier: 'my_simulations',
    url: 'agentsModels/mySimulations',
    ruta: 'mySimulations'
  }
]

export const OPTIONS_MODAL = {
  DISTRIBUTION:'DISTRIBUTION',
  EMPIRICAL:'EMPIRICAL',
  CONSTANT:'CONSTANT',
  WEIGTHS:'WEIGTHS',
  NUMPY:'NUMPY'
}