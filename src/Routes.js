import React from 'react'
import { NavBar } from './components'
import { About, Home, Login, NotFound, Signup } from './pages'
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'

let Routes = () => (
  <BrowserRouter>
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
  </BrowserRouter>
)

export default Routes
