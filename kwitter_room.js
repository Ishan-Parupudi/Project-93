
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCwcozXd8Xzpxwvkc08JBlXZ2urpSwQ498",
      authDomain: "website-e805f.firebaseapp.com",
      databaseURL: "https://website-e805f-default-rtdb.firebaseio.com",
      projectId: "website-e805f",
      storageBucket: "website-e805f.appspot.com",
      messagingSenderId: "455117296727",
      appId: "1:455117296727:web:3ee3dd237f914e6c407f12",
      measurementId: "G-D6VD6PHWTX"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code//
      
      //End code//
      });});}
getData();
