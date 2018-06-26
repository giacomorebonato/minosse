

## Authentication
[AWS Amplify](https://github.com/aws/aws-amplify)  
Generate a cognito app client without client secret
```js
Amplify.configure({
  Auth: {
    identityPoolId: 'XX',  (Federated Identities > Selected Identity Pool/Create new > Sample code > Select Javascript > Get AWS Credentials)
    region: 'us-east-1', (User pools > General Settings > Pool Id) The first part of the Pool Id us-east-1
    userPoolId: 'us-east-1_XXXXXX', (User pools > General Settings > Pool Id)
    userPoolWebClientId: 'XXXXXXXXX', (User pools > General Settings > App clients > App client id)
  }
})


Auth.currentUserInfo()
```

## Deploy
[AWS S3](https://console.aws.amazon.com/s3/)
- Create a bucket
- Enable static web site hosting in the properties
- Permissions: give public read access
- Deploy script `aws s3 sync dist s3://minosse`
