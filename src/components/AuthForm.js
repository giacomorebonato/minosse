import * as React from 'react'
import { Button, Grid, TextField } from '@material-ui/core'

class AuthForm extends React.Component {
  render () {
    const { cta, fields, onChange, onSubmit } = this.props

    return (
      <form
        onChange={onChange}
        onSubmit={onSubmit}
      >
        {
          fields.map(({ label, value }) => (
            <TextField
              fullWidth
              key={label}
              // @ts-ignore
              label={label}
              margin='normal'
              name='email'
              value={value}
            />
          ))
        }

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
            {cta}
          </Button>
        </Grid>
      </form>
    )
  }
}

export default AuthForm
