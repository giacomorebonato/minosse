import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import { NavBar } from './components'
import { About, Home, Login, NotFound, Signup } from './pages'
import { Route, Router } from 'react-router-dom'
import { Switch } from 'react-router'

let history = createBrowserHistory()

let Routes = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='*' component={NotFound} />
      </Switch>
      <NavBar />
    </div>
  </Router>
)

export default Routes
