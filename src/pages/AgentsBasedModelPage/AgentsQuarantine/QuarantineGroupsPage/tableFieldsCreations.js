const fieldsToQuarantineGroups = ({
  cyclicField,
  tracingField
}) =>{
  return{
    headers:[
      {label:'Quarantine Restrictions',attr:'quarantine'},
      {label:'',attr:'value'},
    ],
    body:[
      {
        quarantine:{
          label:'Cyclic quarantine restrictions',
          name:'cyclicLabel'
        },       
        value:{            
          name:'cyclicField',
          type:'switch',
          label:'',            
          props:{              
            title:'',
            ...cyclicField,
            handleChange : cyclicField.onChange
          } 
        }
      },
      {
        quarantine:{
          label:'Quarantine restrictions by tracing variables',
          name:'tracingLabel'
        },       
        value:{            
          name:'tracingField',
          type:'switch',
          label:'',            
          props:{              
            title:'',
            ...tracingField,
            handleChange : tracingField.onChange
          } 
        }
      },            
    ]
  }
}

export default fieldsToQuarantineGroups