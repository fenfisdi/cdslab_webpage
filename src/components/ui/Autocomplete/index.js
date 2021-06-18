import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Typography } from '@material-ui/core'
import { ContainerAutocompleteSection, AutocompleteSection } from './styles'

const AutocompleteComponent = ({optionsSearch,title,keyObject,filterOptions,onChange,showMessage,value}) => {
  
  return (
    <ContainerAutocompleteSection>
      <div>
        <Typography>{title}</Typography>
      </div>
      <AutocompleteSection>
        <i className="fas fa-search"></i>
        <div style={{ width: 300 }}>            
          <Autocomplete            
            freeSolo
            value={value || ''}
            id="free-solo-2-demo"
            disableClearable
            filterOptions={filterOptions}
            options={optionsSearch.map((option) => option[keyObject])}                        
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                margin="normal"                
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />
          {showMessage && <Typography>Not available</Typography>}
        </div>
      </AutocompleteSection>
          
    </ContainerAutocompleteSection>

       
        
  




 
  )
}

export default AutocompleteComponent
