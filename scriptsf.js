// JavaScript for Government Officer Registration form

// Function to handle the "Proceed" button click
function handleProceedButtonClick(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected role (Supervisor or First Responder)
    const selectedRole = document.querySelector('input[name="governmentRole"]:checked');

    if (selectedRole) {
        // Redirect based on the selected role
        if (selectedRole.value === "Supervisor") {
            window.location.href = "supervisor_registration.html";
        } else if (selectedRole.value === "First Responder") {
            window.location.href = "firstresponder_registration.html";
        }
    } else {
        alert("Please select a role before proceeding.");
    }
}

// Event listener for the "Proceed" button
const proceedButton = document.querySelector('#governmentOfficerRegistrationForm input[type="submit"]');
if (proceedButton) {
    proceedButton.addEventListener("click", handleProceedButtonClick);
}
