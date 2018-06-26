import React from 'react'
import { render } from 'react-dom'
import Routes from './Routes'
import Amplify from 'aws-amplify'
import {
  identityPoolId, region, userPoolId, userPoolWebClientId
} from './constants/cognito'

Amplify.configure({
  Auth: {
    identityPoolId, region, userPoolId, userPoolWebClientId
  }
})

render(
  <Routes />,
  document.getElementById('app')
)
