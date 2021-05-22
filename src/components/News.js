import React from 'react'
import app from '../firebase/firebase'
import "firebase/database";
//import firebase from 'firebase'


const News = () => {

    const preObject = document.getElementById('object');

    const comment = app.database().ref('Data/');

    comment.on('value',(snap)=> {
      console.log(snap.val());
      preObject.innerText = JSON.stringify(snap.val(), 2);
     // return snap;
    })



    return( 
        <>
        <h1>Commentaire</h1>
        <p id="preObject"></p>
        <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
        </>
     );
  };


export default News
