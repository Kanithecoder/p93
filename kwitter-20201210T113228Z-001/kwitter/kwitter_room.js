
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAOhu-ajZ8IJzMjmHpvDELkgQ-Q9LnGWL8",
      authDomain: "kwitterapp-cdcfe.firebaseapp.com",
      databaseURL: "https://kwitterapp-cdcfe-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-cdcfe",
      storageBucket: "kwitterapp-cdcfe.appspot.com",
      messagingSenderId: "124823083009",
      appId: "1:124823083009:web:983207c82e7cf75a9d8800"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
