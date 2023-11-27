// document.getElementById("id01").addEventListener("submit", function(event) {
  // Prevent the default form submission
  // event.preventDefault();

  // Get the entered credentials
  // var username = document.getElementById("uname").value;
  // var password = document.getElementById("psw").value;

  // Retrieve stored credentials from localStorage
  // var storedUsername = localStorage.getItem("uname");
  // var storedPassword = localStorage.getItem("psw");

  // Replace the following condition with your actual authentication logic
  // if (username === storedUsername && password === storedPassword) {
    // Redirect to another page
  //   window.location.href = "dashboard.html";
  // } else {
    // Display an error message
//     alert("Invalid credentials. Please try again.");
//   }
// });

// Function to attempt login
function attemptLogin() {
  // Get input values
  var username = document.getElementById('uname').value;
  var password = document.getElementById('psw').value;

  // Retrieve stored password for the given username
  var storedPassword = localStorage.getItem(username);
  var storedPassword = localStorage.getItem(password);

  // Check if the stored password matches the entered password
  if (storedUsername === username && storedPassword === password) {
    alert('Login successful!');
    // Redirect to the dashboard page (replace 'dashboard.html' with your actual dashboard page)
    window.location.href = 'dashboard.html';
  } else {
    alert('Login failed. Please check your username and password.');
  }
}

// Function to attempt signup
function attemptSignup() {
  // Get input values
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;

  // Check if the username already exists in local storage
  if (localStorage.getItem(newUsername)) {
    alert('Username already exists. Please choose a different one.');
  } else {
    // Store the new user credentials in local storage
    localStorage.setItem(newUsername, newPassword);
    alert('Signup successful! Redirecting to the dashboard.');
    
    // Redirect to the dashboard page (replace 'dashboard.html' with your actual dashboard page)
    window.location.href = 'dashboard.html';
  }
}


// Get the modal
const modal1 = document.getElementById("id01"); //login
const modal2 = document.getElementById("id02"); //signup

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};


