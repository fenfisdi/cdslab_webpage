const ListDistance = (listConfigurationDistance) =>{
  let data = [
    ['Parameter', 'Value'],
    [
      [
        {
          type: 'label',
          content: 'Can get infected?'
        },
        {
          type: 'check',
          value: ''
        }
      ], [
        {
          type: 'label',
          content: 'Is infected?'
        },{
          type: 'check',
          value: ''
        }
      ], [
        {
          type: 'label',
          content: 'Is dead?'
        }, {
          type: 'check',
          placeholder: 'value',
          value: true
        }
      ], [
        {
          type: 'label',
          content: 'Can spread?'
        },
        {
          type: 'check',
          placeholder: 'value',
          value: ''
        }
      ], [
        {
          type: 'label-valid',
          content: 'Spread Radius',
          value: false
        }, {
          type: 'input',
          placeholder: 'value',
          value: 2.5
        }, {
          type: 'select',
          title: 'Distance Unit',
          options: listConfigurationDistance
        }
      ], [
        {
          type: 'label-valid',
          content: 'Spread probability',
        }, {
          type: 'slider',
          placeholder: 'value',
          value: 2.5
        }
      ]
    ]
  ]
  return {data}
}

export default ListDistance