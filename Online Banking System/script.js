
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    if (!email.includes('@')) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Registration successful! Redirecting to login page.");
    window.location.href = "/WD/Online Banking System/login.html";

});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        window.location.href = '/WD/Online Banking System/account-details.html';
    } else {
        alert("Please enter both email and password.");
    }
});

