var firebaseConfig = {
    apiKey: "AIzaSyC3WDhXkYCmhaTwxDmxTV5FVdMIjhK_5v0",
    authDomain: "project101-305c6.firebaseapp.com",
    projectId: "project101-305c6",
    storageBucket: "project101-305c6.appspot.com",
    messagingSenderId: "839258198115",
    appId: "1:839258198115:web:d3da1cd45f97b29032e856"
  };
  
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