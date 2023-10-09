// JavaScript for interactivity on registration.html
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var registrationType = document.querySelector('input[name="registrationType"]:checked').value;

    if (registrationType === "Citizen") {
        window.location.href = "citizen_registration.html";
    } else if (registrationType === "Government Officer") {
        window.location.href = "government_officer_registration.html";
    }
});
