import React from 'react'
import app from '../firebase/firebase'



    const Home = () => {
  
        return( 
           <div className="coin360">
             <iframe src="https://coin360.com/widget/map.html" frameborder="0"
                  title="Coin360.com: Cryptocurrency Market State" ></iframe>
                  <button onClick={() => app.auth().signOut()}>Sign out</button>
          </div>
         )
      }


export default Home
