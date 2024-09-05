document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        event.preventDefault();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === "" || password === "") {
        alert('Please fill all fields');
        event.preventDefault();
    }
});


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert("Registration successful!");
        window.location.href = 'login.html';
    } else {
        alert("Passwords do not match. Please try again.");
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username && password) {
        message.textContent = "Login successful!";
        message.style.color = "green";
       
        setTimeout(function() {
            window.location.href = "index.html"; 
        }, 10); 
    } else {
        message.textContent = "Please fill in both fields.";
        message.style.color = "red";
    }
});