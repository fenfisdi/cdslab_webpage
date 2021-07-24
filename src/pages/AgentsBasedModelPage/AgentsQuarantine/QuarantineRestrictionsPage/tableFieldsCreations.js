const fieldsToQuarantineRestrictionModal = ({
  restrictionsDelayInputModal,
  globalCuarantineTimeInput,
  restrictionsDelaySelectModal,
  restrictionsQuarantinelInputModal,
  restrictionsQuarantinelSelectModal,
  restrictionsUnrestrictedInputModal,
  restrictionsUnrestrictedSelectModal}) =>{
  return{
    headers:[
      {label:'Parameter',attr:'parameter'},
      {label:'Value',attr:'type'},
      {label:'Units',attr:'units'}
    ],
    body:[
      {
        parameter:{
          label:'Delay',
          name:'delay'
        },
        type:{      
          name:'type',
          label:'',
          type:'input',
          props:{
            disabled:false,
            required:true,
            fullWidth:false,
            variant:'outlined',            
            styles:{'padding':'0px'},
            ...restrictionsDelayInputModal              
          },
          validators:[
            {
              name:'minValue',
              value:globalCuarantineTimeInput.value,
              check(valueCompare){
                return parseInt(valueCompare) <= parseInt(globalCuarantineTimeInput.value)
              },
              message:`valor debe ser menor o igual ${globalCuarantineTimeInput.value}`
            }
          ],            
        },         
        units:{            
          name:'distanceunits',
          type:'select',
          label:'time units',            
          props:{              
            title:'time units',
            options:[{label:'prueba',value:'prueba'}],
            ...restrictionsDelaySelectModal
          } 
        }
      },
      {
        parameter:{
          label:'Quarantine length',
          name:'quarantinelength'
        },
        type:{      
          name:'type',
          label:'',
          type:'input',
          props:{
            disabled:false,
            required:true,
            fullWidth:false,
            variant:'outlined',            
            styles:{'padding':'0px'},
            ...restrictionsQuarantinelInputModal           
          },
          validators:[
            {
              name:'minValue',
              value:globalCuarantineTimeInput.value,
              check(valueCompare){
                return parseInt(valueCompare) <= parseInt(globalCuarantineTimeInput.value)
              },
              message:`valor debe ser menor o igual ${globalCuarantineTimeInput.value}`
            }
          ]            
        },         
        units:{            
          name:'distanceunits',
          type:'select',
          label:'time units',            
          props:{              
            title:'time units',
            options:[{label:'prueba',value:'prueba'}],
            ...restrictionsQuarantinelSelectModal
          } 
        }
      },
      {
        parameter:{
          label:'Unrestricted time',
          name:'unrestrictedtime'
        },
        type:{      
          name:'type',
          label:'',
          type:'input',
          props:{
            disabled:false,
            required:true,
            fullWidth:false,
            variant:'outlined',            
            styles:{'padding':'0px'},
            ...restrictionsUnrestrictedInputModal              
          },
          validators:[
            {
              name:'minValue',
              value:globalCuarantineTimeInput.value,
              check(valueCompare){
                return parseInt(valueCompare) <= parseInt(globalCuarantineTimeInput.value)
              },
              message:`valor debe ser menor o igual ${globalCuarantineTimeInput.value}`
            }
          ]            
        },         
        units:{            
          name:'distanceunits',
          type:'select',
          label:'time units',            
          props:{              
            title:'time units',
            options:[{label:'prueba',value:'prueba'}],
            ...restrictionsUnrestrictedSelectModal
          } 
        }
      }             
    ]
  }
}

export default fieldsToQuarantineRestrictionModal