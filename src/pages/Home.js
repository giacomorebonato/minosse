import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

class Home extends React.Component {
  render () {
    return (
      <section>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>Test</h1>
      </section>
    )
  }
}

export default Home
