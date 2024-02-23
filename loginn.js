const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Redirect to index.html without any predefined validation
        window.location.href = "index.html";
    });
});



       