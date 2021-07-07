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
  InputTex,
  ContentSelect
} from './styles'

export default function TableObjDinamic({ data }) {
  const [viewState, setViewState] = useState(false)
  const titles = data && data.length > 0 ? data[0] : []
  const rows = data && data.length > 0 ? data[1] : []

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
          <Title key={id}>{title}</Title>
        ))}
      </TitleRow>

      {rows.map((row, idRow) => (
        <Row key={idRow}>
          {row.map((item, idItem) => {
            if(item.type === 'label' && (viewState || item.show)){
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
              return (
                <Content key={idItem}>
                  <RowCenter key={idItem}>
                    <FormControlLabel
                      control={
                        <Switch 
                          checked={item.checked||false} 
                          value={item.value} 
                          onChange={item.handleChange} 
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
                      name={item.name}
                      onChange={item.handleOnChange}
                      disabled ={item.disabled}
                    />
                  </RowCenter>
                </Content>
              )
            }

            if (item.type === 'select' && (viewState || item.show)){
              return (
                <ContentSelect key={idItem}>
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
                              value={item.value}
                              name={item.name}
                              onChange={item.handleOnChange}
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
                </ContentSelect>
              )
            }

            if(item.type === 'slider' && (viewState || item.show)){
              return (
                <Content key={`${idItem}${item.name}`}>
                  <Slider
                    id={`${idItem}${item.name}`}
                    key={`${idItem}${item.name}`}
                    value={item.value}
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    onChange={item.handleOnChange}
                  />
                  <InputTex
                    className="input-slider"
                    id={`${idItem}${item.name}`}
                    key={`${idItem}${item.name}`}
                    name ={item.name}
                    value={item.value}
                    disabled={item.disabled}
                  />
                </Content>
              )
            }
            if(item.type === 'component' && (viewState || item.show)){
              const { component } = item
              const Component = component[0]
              return (
                <Content key={idItem}>
                  <Component />
                </Content>
              )
            }
          })}
        </Row>
      ))}
    </Table>
  )
}