import styled from 'styled-components'

export const Table = styled.ul`
  display: flex;
  flex-direction: column;
  width: max-content;
`

export const TitleRow = styled.li`
  display: flex;
  margin-bottom: 10px;
  list-style: none;
  font-weight: 400;
  color: #000;
  height: 20px;
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CFD8DC;
  height: 100%;
  width: 150px;
`

export const Row = styled.li`
  display: flex;
  list-style: none;
  
  height: 35px;
  font-weight: 400;
  color: #000;
`

export const RowLeft = styled.div`
  text-align: left;
  width: 100%;
  padding: 10px;
`
export const RowCenter = styled.div`
  text-align: center;
  width: 100%;
`
export const RoWhite = styled.div`
  background-color: #FFFFFF;
  // width: 100%;
  // height: 100%;
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 150px;
  align-items: center;
  border: 1px solid white;
  background-color: #ECEFF1;
`



export const Input = styled.input`
  width: 100px;
  height: 20px;
  border: 1px solid #025E5C;
  color: #025E5C;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 23px;
  padding: 1px 5px;
  outline: none;
`

export const InputTex = styled.input`
  width: 100%;
  display: flex;
  margin: 10px;
  justify-content: space-between;
  & .range-slider {
    width: 60%;
    margin-left: 10px;
    color: ${(props) => props.theme.palette.primary.dark};
  }
  & .input-slider {
    width: 25%;
    font-size: 0.9em;
    margin: 12px;
  }
`
