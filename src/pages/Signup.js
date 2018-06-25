import React from 'react'
import CustomAppBar from '../components/CustomAppBar'
import {
  Button,
  Grid,
  Paper,
  TextField
} from '@material-ui/core'
import {
  userPool
} from '../lib/cognito'
import {
  CognitoUserAttribute
} from 'amazon-cognito-identity-js'

class Signup extends React.Component {
  constructor (props) {
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
      new CognitoUserAttribute({
        Name: 'email',
        Value: this.state.email
      })
    ]

    userPool.signUp(
      this.state.email,
      this.state.password,
      attributeList,
      null,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }

        console.log('user name is ' + result.user.getUsername())
      })
  }
  render () {
    const { email, password } = this.state

    return (
      <React.Fragment>
        <CustomAppBar>Signup</CustomAppBar>
        <Grid
          justify='center'
          container
          spacing={16}
          style={{
            marginTop: '2em'
          }}
        >
          <Grid item sm={4} xs={6}>
            <Paper
              style={{
                padding: '2em'
              }}
            >
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

                <Grid
                  container
                  justify='flex-end'
                  style={{
                    marginTop: '1em'
                  }}
                >
                  <Button
                    color='primary'
                    size='small'
                    type='submit'
                    variant='contained'
                  >
                    Signup
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Signup
