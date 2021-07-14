import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & .range-slider {
    width: 65%;
    color: ${(props) => props.theme.palette.primary.dark};
  }
  & .input-slider {
    width: 25%;
    font-size: 0.9em;
  }
`
