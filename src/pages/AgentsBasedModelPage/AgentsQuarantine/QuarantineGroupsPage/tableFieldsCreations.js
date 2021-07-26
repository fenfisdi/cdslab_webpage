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
            ...cyclicField
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
            ...tracingField
          } 
        }
      },            
    ]
  }
}

export default fieldsToQuarantineGroups