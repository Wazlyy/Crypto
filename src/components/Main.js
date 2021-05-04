import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Trending from './Trending'
import News from './News'
import Login from './Login'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/trending' component={Trending}/>
      <Route path='/news' component={News}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
)

export default Main
