import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

export default function CustomAppBar (props) {
  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <Typography variant='title' color='inherit'>
          {props.children}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
