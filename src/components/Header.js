import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
    <nav>
        <a><Link to='/'>Home</Link></a>
        <a><Link to='/trending'>Trending View</Link></a>
        <a><Link to='/news'>News</Link></a>
        <a><Link to='/login'>Login/Sign up</Link></a>
    </nav>
  </header>
)

export default Header