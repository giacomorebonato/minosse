import React from 'react'
import {
  AppBar, Typography, Toolbar
} from '@material-ui/core'

class About extends React.Component {
  render () {
    return (
      <section>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              About
            </Typography>
          </Toolbar>
        </AppBar>
      </section>
    )
  }
}

export default About
