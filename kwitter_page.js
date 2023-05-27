var firebaseConfig = {
    apiKey: "AIzaSyDjGJ219LeTDeeCy8utDTdFEC-QTRrHpWY",
    authDomain: "let-s-chat-web-app-56c9c.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-56c9c-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-56c9c",
    storageBucket: "let-s-chat-web-app-56c9c.appspot.com",
    messagingSenderId: "1054292686664",
    appId: "1:1054292686664:web:620fe479c613b2ba95a57d"
  };
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function Send()
{
   msg = document.getElementById("msg").value ;  
   firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
   });
   document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();