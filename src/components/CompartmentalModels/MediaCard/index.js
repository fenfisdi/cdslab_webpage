import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import {CharterIcon} from './styles'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardActions:{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    padding:'15px'
  }
})

export default function MediaCard({option}) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=>{option.handleAction(option.url)}}>
        {option.icon &&
              <CharterIcon>
                <img src={option.icon} alt="Cinque Terre" width="258" height="258" />
              </CharterIcon>
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {option?.description?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {option?.description?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="large" color="primary" onClick={()=>{option.handleAction(option.url)}}>
          {option.name}
        </Button>        
      </CardActions>
    </Card>
  )
}