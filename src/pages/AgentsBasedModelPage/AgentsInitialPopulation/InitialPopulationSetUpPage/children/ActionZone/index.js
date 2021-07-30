import { IconButton } from '@material-ui/core'
import React from 'react'


const ActionZoneInitialPopulation =({
  options,
  itemTable,
  indexItem
}) => {  
  return (
    <div className="panel__options">
      {options &&
        options.map((option, index) => {
          const { onClick, children:Children } = option
          return (
            <IconButton              
              key={`panel__option-${index}`}
              {...option}
              onClick={e =>
                onClick(e, {
                  option,
                  itemTable,
                  indexItem
                })
              }>
              {<Children style={{  color: option.isCheckable && option.validation(itemTable) ? '#66c2c1' :'rgba(0, 0, 0, 0.26)' }}/>}
            </IconButton>
          )
        })}
    </div>
  )
}



export default ActionZoneInitialPopulation
