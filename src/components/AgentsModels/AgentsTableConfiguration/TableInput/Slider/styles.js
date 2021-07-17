import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .range-slider {
    width: ${(props) => props.styles?.range ? props.styles.range.width:'60%'};    
    margin-right: 35px;
    color: ${(props) => props.theme.palette.primary.dark};
  }
  & .input-slider {
    width: ${(props) => props.styles?.input ? props.styles.input.width:'20%'};
    font-size: 0.9em;
  }
`
