import React from 'react'
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'

class Login extends React.Component {
  render () {
    return (
      <section>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Login
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <form>
              <TextField
                fullWidth
                label='Email'
                margin='normal'
              />

              <TextField
                fullWidth
                label='Password'
                margin='normal'
              />
            </form>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </section>
    )
  }
}

export default Login
