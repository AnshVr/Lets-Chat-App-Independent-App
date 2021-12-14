
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCO3alwIXWVOUy2a3bAM0QN0Tt2lqTgZq4",
      authDomain: "kwitter-27f9f.firebaseapp.com",
      databaseURL: "https://kwitter-27f9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-27f9f",
      storageBucket: "kwitter-27f9f.appspot.com",
      messagingSenderId: "198276722374",
      appId: "1:198276722374:web:f422cf56d3f9bd6892f1c7"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }
