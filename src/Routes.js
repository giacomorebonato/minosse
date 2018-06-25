import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import { NavBar } from './components'
import { About, Home, Login, Signup } from './Pages'
import { Route, Router } from 'react-router-dom'

let history = createBrowserHistory()

let Routes = () => (
  <Router history={history}>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <NavBar />
    </div>
  </Router>
)

export default Routes
