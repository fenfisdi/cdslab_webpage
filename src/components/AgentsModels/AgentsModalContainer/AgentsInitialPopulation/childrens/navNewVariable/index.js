import { Button } from '@material-ui/core'
import React from 'react'
import { SelectComponent } from '../../../../../ui/Select'
import useNavNewVariableState from './state'
import { TitleContainer, Container, VariablesContainer, NestingContainer, NestingButton, FiltersContainer, LabelVariable } from './styles'

const NavNewVariable = ({eventEmmiter,variableToConfig}) => {
  
  const { 
    items,
    setItems,
    addNewGroup,
    validationNoTnullValueItems } =useNavNewVariableState({eventEmmiter})
    
  return (          
    <Container>

      <TitleContainer>
        <strong>Variable Nesting</strong>
      </TitleContainer>

      <FiltersContainer>
        <NestingContainer>
          <VariablesContainer>
            {items.map((item,index)=>
              <SelectComponent 
                xs={3} 
                key={index} 
                options={item.options} 
                value={item.value}
                onChange={(event)=>item.onChange({event,index,itemsCurrent:items,setItemsCurrent:setItems})} />
            )}                    
          </VariablesContainer>
          <NestingButton>
            <Button onClick={()=>{
              if(items.length<=4 && validationNoTnullValueItems(items)){addNewGroup()}
            }}>+</Button>          
          </NestingButton>        
        </NestingContainer>

        <LabelVariable>{variableToConfig}</LabelVariable>
      </FiltersContainer>
    </Container>   
  )
  
}

export default NavNewVariable