import React from 'react'
import CustomAppBar from '../components/CustomAppBar'
import { Grid, Paper } from '@material-ui/core'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <CustomAppBar>Home</CustomAppBar>
        <div style={{ padding: 20 }}>
          <Grid
            justify='center'
            container
            spacing={16}
            style={{
              marginTop: '2em'
            }}
          >
            <Grid item xs={12} sm={4}>
              <Paper>
                Test 1
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper>
                Test 2
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper>
                Test 3
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
