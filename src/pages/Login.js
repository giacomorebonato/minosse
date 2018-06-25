import React from 'react'
import CustomAppBar from '../components/CustomAppBar'
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'

class Login extends React.Component {
  render () {
    return (
      <React.Fragment>
        <CustomAppBar>
          Sign in
        </CustomAppBar>

        <div style={{ padding: 20 }}>
          <Paper style={{ padding: '2em' }}>
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
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
