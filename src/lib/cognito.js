import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser
} from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'us-east-1_8uDXtlQE6',
  ClientId: '55sag3qp7ujqhf2hrb86fdcvcv'
}

export let userPool = new CognitoUserPool(poolData)
