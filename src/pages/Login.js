import React from 'react'
import CustomAppBar from '../components/CustomAppBar'
import {
  Button,
  Paper,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Auth } from 'aws-amplify'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      password: '',
      username: ''
    }

    Auth.currentUserInfo().then(console.log)
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()

    const { password, username } = this.state

    Auth.signIn(username, password)
      .then(success => console.log('successful sign in!'))
      .catch(err => console.log(err))
  }
  render () {
    const { password, username } = this.state

    return (
      <React.Fragment>
        <CustomAppBar>
          Sign in
        </CustomAppBar>

        <div style={{ padding: 20 }}>
          <Paper style={{ padding: '2em' }}>
            <form
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            >
              <TextField
                fullWidth
                label='Username'
                margin='normal'
                name='username'
                value={username}
              />

              <TextField
                fullWidth
                label='Password'
                margin='normal'
                name='password'
                type='password'
                value={password}
              />

              <Button
                color='primary'
                type='submit'
                variant='contained'
              >Login</Button>
            </form>
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
