document.getElementById('login-btn').addEventListener('click', function() {
    alert('Login button clicked');
});

document.getElementById('search-bar').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    if (searchQuery.includes("kids")) {
        window.location.href = "#kids";
    } else if (searchQuery.includes("women")) {
        window.location.href = "#women";
    } else if (searchQuery.includes("men")) {
        window.location.href = "#men";
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
            window.location.href = "home.html"; 
        }, 1000); 
    } else {
        message.textContent = "Please fill in both fields.";
        message.style.color = "red";
    }
});