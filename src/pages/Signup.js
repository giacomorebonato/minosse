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
import {
  userPool
} from '../lib/cognito'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()

    let attributeList = [
      {
        Name: 'email',
        Value: this.state.email
      }
    ]
    userPool.signUp(this.state.email, this.state.password, attributeList, null, (err, result) => {
      if (err) {
        alert(err)
        return
      }

      console.log('user name is ' + result.user.getUsername())
    })
  }
  render () {
    const { email, password } = this.state

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
            <form
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            >
              <TextField
                fullWidth
                label='Email'
                margin='normal'
                name='email'
                value={email}
              />

              <TextField
                fullWidth
                label='Password'
                margin='normal'
                name='password'
                type='password'
                value={password}
              />
            </form>
          </CardContent>
          <CardActions>
            <button type='submit'>Submit</button>
            <Button size='small' color='primary' type='submit'>
              Signup
            </Button>
          </CardActions>
        </Card>
      </section>
    )
  }
}

export default Login
