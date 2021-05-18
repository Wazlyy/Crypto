import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Trending from './Trending'
import News from './News'
import Login from './Login'
import Register from './Register'
import { AuthProvider } from '../firebase/Auth'
import PrivateRoute from "../firebase/PrivateRoute"


const Main = () => (
  <AuthProvider>
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <PrivateRoute path='/trending' render={(props) => <Trending {...props} />} />
      <Route path='/news' render={(props) => <News {...props} />} />
      <Route path='/login' render={(props) => <Login {...props} />} />
      <Route path='/register' render={(props) => <Register {...props} />} />
    </Switch>
    </AuthProvider>
)

export default Main
