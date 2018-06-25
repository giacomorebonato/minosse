import React from 'react'
import { Link } from 'react-router-dom'
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'

let homeLinks = [
  { label: 'Home', value: '/' },
  { label: 'Login', value: '/login' },
  { label: 'About', value: '/about' },
  { label: 'Signup', value: '/signup' }
]

function AppNavBar () {
  return (
    <BottomNavigation
      showLabels
      style={{
        justifyContent: 'space-around'
      }}
    >
      {
        homeLinks.map(
          ({ label, value }, key) => (
            <BottomNavigationAction
              // @ts-ignore
              component={Link}
              label={label}
              key={key}
              to={value}
            />
          )
        )
      }
    </BottomNavigation>
  )
}

export default AppNavBar
