import { useEffect, useState } from 'react'

export const useComparmentalInsPageState = ({stateVariable}) => {
  const [initialDate, setInitialDate] = useState(null)
  const [finalDate, setFinalDate] = useState(null)
  const [showError, setShowError] = useState(false)
  const [optionsSearch, setOptionsSearch] = useState([
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: 'Schindler\'s List', year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: 'It\'s a Wonderful Life', year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 }
  ])
  const [regionChoose,setRegionChoose] = useState(null)
  const [headersTable, setHeadersTable] = useState([])
  const [dataTable, setDataTable] = useState([])
  const [showMessage,setShowMessage] = useState(false)
  const [selectOptions, setSelectOptions] = useState([{label:'option 1',name:'optio1'},{label:'option 2',name:'optio2'}])
  
  useEffect(()=>{
    if(stateVariable.value){
      console.log('stateVariable:::::::::::::>',stateVariable.value)      
    }
  },[stateVariable.value])

  useEffect(()=>{
    if(!showMessage && regionChoose!=null){
      console.log('regionChoose:::::::::::::>',regionChoose)
    }
  },[regionChoose])

  useEffect(()=>{
    if(showError){
      setRegionChoose(null)
    }
  },[showError])

  return {
    dates:{
      initialDate,
      setInitialDate,
      finalDate,
      setFinalDate
    },
    tableDate:{
      headersTable,
      setHeadersTable,
      dataTable,
      setDataTable
    },
    messages:{
      showMessage,
      setShowMessage,
      showError,
      setShowError
    },    
    optionsSearch,
    setOptionsSearch,
    regionChoose,
    setRegionChoose,
    selectOptions, 
    setSelectOptions
    
  }

}