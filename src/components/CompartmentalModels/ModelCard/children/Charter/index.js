import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useCharterStyles } from './styles'



const Charter = ({name,handleClickCharter,selected})=>  {
  const classes = useCharterStyles()  
  return (
    <Card className={selected==name ? classes.root + ' selected':classes.root } onClick={()=>{handleClickCharter(name)}}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Charter