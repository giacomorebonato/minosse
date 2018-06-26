import { Auth } from 'aws-amplify'
import React from 'react'
import CustomAppBar from '../components/CustomAppBar'
import AuthForm from '../components/AuthForm'


class Signup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
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

    const { password, username } = this.state

    Auth.signUp(username, password)
      .then(success => console.log('successful sign in!'))
      .catch(err => console.log(err))
  }
  render () {
    const { username, password } = this.state

    return (
      <React.Fragment>
        <CustomAppBar>Signup</CustomAppBar>
        <AuthForm
          cta='Submit'
          fields={[
            { label: 'Username', value: username },
            { label: 'Password', value: password }
          ]}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export default Signup
