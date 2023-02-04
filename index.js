var firebaseConfig = {
    apiKey: "AIzaSyD4aYvS4NRtJl0wupUl9MCyYjF7XPlrJso",
    authDomain: "cv-generator-9ce5f.firebaseapp.com",
    databaseURL: "https://cv-generator-9ce5f-default-rtdb.firebaseio.com",
    projectId: "cv-generator-9ce5f",
    storageBucket: "cv-generator-9ce5f.appspot.com",
    messagingSenderId: "250787628931",
    appId: "1:250787628931:web:72a065c61e6a2b230518b6",
    measurementId: "G-S3HYB4P4M3",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()


document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

  // Set up our register function 
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    contact = document.getElementById('get_contact').value
    
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return 
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(contact) == false) {
      alert('One or More Extra Fields is Outta Line!!')
      return
    }
    
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
          email: email,
          full_name: full_name,
          contact: contact,
          last_login: Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      window.open("profile.html", "_self")
  
      //alert('User Created!!')

      
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }

  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return 
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      window.open("profile.html", "_self")
  
      //alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
function forgotPass(){
   
    email = document.getElementById('email').value
    auth.sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }
