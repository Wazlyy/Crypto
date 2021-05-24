import React from 'react'
import app from '../firebase/firebase'


const Footer = () => (
  <footer>
      <p class="copyright">Cryptochomeur.fr</p>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
  </footer>
)

export default Footer