

## Deploy
[AWS S3](https://console.aws.amazon.com/s3/)
- Create a bucket
- Enable static web site hosting in the properties
- Permissions: give public read access
- Deploy script `aws s3 sync dist s3://minosse`
