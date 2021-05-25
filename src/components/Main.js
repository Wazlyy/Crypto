import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Trending from './Trending'
import News from './News'
import Login from './Login'
import Register from './Register'
import Bitcoin from './Bitcoin'
import BinanceCoin from '../components/crypto/BinanceCoin'
import CakeSwap from '../components/crypto/CakeSwap'
import Cardano from '../components/crypto/Cardano'
import DogeCoin from '../components/crypto/DogeCoin'
import Ethereum from '../components/crypto/Ethereum'
import Litecoin from '../components/crypto/Litecoin'
import Polkadot from '../components/crypto/Polkadot'
import UniSwap from '../components/crypto/UniSwap'
import { AuthProvider } from '../firebase/Auth'
import PrivateRoute from "../firebase/PrivateRoute"


const Main = () => (
  <AuthProvider>
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route path='/trending' render={(props) => <Trending {...props} />} />
      <Route path='/news' render={(props) => <News {...props} />} />
      <Route path='/login' render={(props) => <Login {...props} />} />
      <Route path='/register' render={(props) => <Register {...props} />} />
      <Route path='/Bitcoin' render={(props) => <Bitcoin {...props} />} />
      <Route path='/BinanceCoin' render={(props) => <BinanceCoin {...props} />} />
      <Route path='/CakeSwap' render={(props) => <CakeSwap {...props} />} />
      <Route path='/Cardano' render={(props) => <Cardano {...props} />} />
      <Route path='/DogeCoin' render={(props) => <DogeCoin {...props} />} />
      <Route path='/Ethereum' render={(props) => <Ethereum {...props} />} />
      <Route path='/Litecoin' render={(props) => <Litecoin {...props} />} />
      <Route path='/Polkadot' render={(props) => <Polkadot {...props} />} />
      <Route path='/UniSwap' render={(props) => <UniSwap {...props} />} />
    </Switch>
    </AuthProvider>
)

export default Main
