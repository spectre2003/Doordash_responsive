   // change signIn and SignUp
var signIn = document.getElementsByClassName("signIn")[0];
var signUp = document.getElementsByClassName("signUp")[0];

function change(isSmallScreen) {
    if (signIn) {
        signIn.innerHTML = isSmallScreen ? "Login" : "Sign In";
    }
    if (signUp) {
        signUp.innerHTML = isSmallScreen ? "Open App" : "Sign Up";
    }
}

function checkScreenSize() {
    if (window.matchMedia("(max-width: 770px)").matches) {
        change(true);
    } else {
        change(false);
    }
}

checkScreenSize();

window.addEventListener('resize', checkScreenSize);
