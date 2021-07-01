import { 
  FormControlLabel, 
  Slider, 
  Switch, 
  Select, 
  makeStyles, 
  FormControl, 
  Grid, 
  MenuItem, 
  InputLabel
} from '@material-ui/core'
import React,{useState} from 'react'
import { 
  Table, 
  Title, 
  TitleRow, 
  Content, 
  Row, 
  RowLeft, 
  RowCenter, 
  RoWhite, 
  Input, 
  InputTex
} from './styles'

export default function TableTextInput({ data, onchange }) {
  const [state, setState] = useState()
  const [valueChangeSelect, setValueChangeSelect] = useState(0)
  const [valueChange, setValueChange] = useState(0)
  const [viewState, setViewState] = useState(false)
  const titles = data && data.length > 0 ? data[0] : []
  const rows = data && data.length > 0 ? data[1] : []


  const handleChange =(event)=>{
    setState(event.target.checked)
    if(event.target.value === 'Can spread?') {
      setViewState(event.target.checked)
    }
  }

  const clone = items => items.map(item => (Array.isArray(item) ? clone(item) : item))
  const handleInput = (e, idRow, idItem) => {
    const { value } = e.target
    const newRows = clone(rows)
    newRows[idRow][idItem].value = value
    onchange([titles, newRows])
  }

  const handelChangeSelect = (e, value)=>{
    setValueChangeSelect(value.props.value)
  }

  const handleSliderChange=(event, value)=>{
    setValueChange(value)
  }
  const useStyles = makeStyles((theme) => ({
    formControl: {
      width: '100%',
      margin: '3px',
      marginTop: '5px',
      marginBottom: '8px',
      color: '#006064'
    },
    labelInput: {
      color: '#006064',
      zIndex: 10
    },
    selectEmpty: {
      marginTop: theme.spacing(5),
    },
    selectForm:{
      'box-shadow': '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      color: '#006064',    
      'background': '#E0F3FA'
    }
  }))
  const classes = useStyles()
  return (
    <Table>
      <TitleRow>
        {titles.map((title, id) => (
          <Content key={id}>
            <Title key={id}>{title}</Title>
          </Content>
        ))}
      </TitleRow>

      {rows.map((row, idRow) => (
        <Row key={idRow}>
          {row.map((item, idItem) => {
            if(item.type === 'label'){
              return (
                <Content key={idItem}>
                  <RowLeft key={idItem}>{item.content}</RowLeft>
                </Content>
              )
            }

            if(item.type === 'label-valid' && (viewState || item.show)){
              return (
                <Content key={idItem}>
                  <RowLeft key={idItem}>{item.content}</RowLeft>
                </Content>
              )
            }

            if(item.type === 'check'){
              // if(item.value){
              //   setState(item.value)
              // }
              return (
                <Content key={idItem}>
                  <RowCenter key={idItem}>
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={state} 
                          value={row[0].content} 
                          onChange={handleChange} 
                          name={`Item${idRow}`} 
                          color="primary"
                        />
                      }
                    />
                  </RowCenter>
                </Content>
              )
            }

            if(item.type === 'input' && (viewState || item.show)){
              return (
                <Content key={idItem}>
                  <RowCenter key={idItem}>
                    <Input
                      placeholder={item.placeholder}
                      value={item.value}
                      onChange={(e) => handleInput(e, idRow, idItem)}
                      disabled ={item.disabled}
                    />
                  </RowCenter>
                </Content>
              )
            }

            if (item.type === 'select' && (viewState || item.show)){
              return (
                <Content key={idItem}>
                  <RowCenter key={idItem}>
                    <RoWhite key={idItem}>
                      <RowCenter key={idItem}>
                        <Grid xs={12} item>
                          <FormControl
                            className={classes.formControl}
                          >
                            <InputLabel className={classes.labelInput} id={item.placeholder}>{item.placeholder}</InputLabel>
                            <Select
                              id={`selectComponent-simple${idItem}`}
                              value={valueChangeSelect||''}
                              onChange={handelChangeSelect}
                              className={classes.selectForm}
                            >
                              {item.options.map((option) => {
                                const { value: optionValue, label } = option
                                return <MenuItem key={optionValue} value={optionValue}>{label}</MenuItem>
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                      </RowCenter>
                    </RoWhite>
                  </RowCenter>
                </Content>
              )
            }

            if(item.type === 'slider' && (viewState || item.show)){
              return (
                <Content key={idItem}>
                  <Slider
                    className="range-slider"
                    name={'ejemplo'}
                    id={'ejemplo'}
                    value={valueChange}
                    min={0}
                    max={1.00}
                    step={0.001}
                    onChange={handleSliderChange}
                  />
                  <InputTex
                    className="input-slider"
                    id={idItem}
                    name ={idItem}
                    value={valueChange}
                    disabled={true}
                  />
                </Content>
              )
            }
          })}
        </Row>
      ))}
    </Table>
  )
}