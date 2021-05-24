import React from 'react'
import app from '../firebase/firebase'
import "firebase/database";
//import firebase from 'firebase'


const News = () => {

    const comment = app.database().ref('Data/').on('value',function (snap) {
      //console.log(snap.val());

      snap.forEach(function(element){
        document.getElementById("com").innerHTML +=`<div>${Object.values(element.val())}</div>`;
      })
      //let commentaire = Object.keys(snap.val());
    
      //const obj = JSON.parse(commentaire);
    
    })



    return( 
        <>
        <br></br>
        <h1>Commentaire</h1>
        <div class="hr"></div>
        <div class="com-div">
        <div id="com"></div>
        </div>
        <div class="hr"></div>
        <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
        </>
     );
  };


export default News
