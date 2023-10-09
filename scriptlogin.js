document.addEventListener("DOMContentLoaded", function () {
    var govOfficerOptions = document.getElementById("govOfficerOptions");
    var supervisorSection = document.getElementById("supervisorSection");
    var firstResponderSection = document.getElementById("firstResponderSection");

    document.getElementById("govOfficer").addEventListener("change", function () {
        if (this.checked) {
            govOfficerOptions.style.display = "block";
        } else {
            govOfficerOptions.style.display = "none";
            supervisorSection.style.display = "none";
            firstResponderSection.style.display = "none";
        }
    });

    document.getElementById("supervisor").addEventListener("change", function () {
        if (this.checked) {
            supervisorSection.style.display = "block";
            firstResponderSection.style.display = "none";
        } else {
            supervisorSection.style.display = "none";
        }
    });

    document.getElementById("firstResponder").addEventListener("change", function () {
        if (this.checked) {
            firstResponderSection.style.display = "block";
            supervisorSection.style.display = "none";
        } else {
            firstResponderSection.style.display = "none";
        }
    });

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        if (document.getElementById("govOfficer").checked && !document.querySelector('input[name="govRole"]:checked')) {
            event.preventDefault(); // Prevent form submission
            alert("Please select a government role and fill in the details.");
        }
    });
});
