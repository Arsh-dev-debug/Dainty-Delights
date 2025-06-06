// Show modal after 2 seconds
window.onload = function() {
    setTimeout(openModal, 2000);
};

function openModal() {
    document.getElementById("auth-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("auth-modal").style.display = "none";
}

// Toggle between Login and Sign-Up forms
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("signUpTab").classList.remove("active");
}

function showSignUp() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
    document.getElementById("signUpTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
}

function continueAsGuest() {
    closeModal();
}
