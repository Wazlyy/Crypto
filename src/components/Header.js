import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/trending'>Trending View</Link>
        <Link to='/news'>News</Link>
        <Link to='/login'>Login</Link>
        <Link to='/Register'>Sign up</Link>
    </nav>
  </header>
)

export default Header