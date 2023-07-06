document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var spinner = document.querySelector(".spinner");
        var content = document.querySelector(".content");

        spinner.style.display = "none";
        content.style.display = "block";
    }, 3000);
});



//   clear field
document.getElementById("clearEmail").addEventListener("click", function () {
    document.getElementById("email").value = "";
});

//   hide show password
var passwordInput = document.getElementById("password");
var togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.innerHTML = '<i class="bi bi-eye"></i>';
    } else {
        passwordInput.type = "password";
        togglePasswordButton.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
});


// Toggle the sidebar
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
  }



//   badge color




