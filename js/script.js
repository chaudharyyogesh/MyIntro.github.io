
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC7JQM9holCu5U2T0I1ioVRJZg52TlGmr8",
    authDomain: "myintro-f96c5.firebaseapp.com",
    databaseURL: "https://myintro-f96c5.firebaseio.com",
    projectId: "myintro-f96c5",
    storageBucket: "myintro-f96c5.appspot.com",
    messagingSenderId: "337612246805",
    appId: "1:337612246805:web:414ce05a9cd03bf2fda31c",
    measurementId: "G-J86Z3NGSKH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //reference messages collection
  //creating a collection in firebase database that stores the data
  var messageref=firebase.database().ref('messages');

//copy email functin   
function copyFunc()
{  
    var text = document.getElementById("copyEmail").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("copied");
}


//get form details
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){

    e.preventDefault();

    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;

    saveMessage(name,email,message);

    //alert message
    document.querySelector('.alertMessage').style.display='block';

    //timeout
    setTimeout(function(){
        document.querySelector('.alertMessage').style.display='none';
    },2000)

    //resetting the form after submitting
    document.getElementById('contactForm').reset();






}


//save message to firebase
function saveMessage(name,email,message){
    var newMessageRef=messageref.push();
    newMessageRef.set({
        name: name,
        email: email,
        message:message
    });
}