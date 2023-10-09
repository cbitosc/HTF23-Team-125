document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the selected role
    var role = document.querySelector('input[name="role"]:checked').value;

    // Check if the role is "citizen" and display the link if true
    if (role === "citizen") {
        document.getElementById("complaintLink").innerHTML = '<a href="complaint_submission.html">Submit a Complaint</a>';
    } else {
        document.getElementById("complaintLink").innerHTML = ''; // Clear the link
        // Check if the role is "gov_officer" and if an option is selected
        var govRole = document.querySelector('input[name="govRole"]:checked');
        if (role === "gov_officer" && govRole) {
            // Redirect to the appropriate view complaints page based on the selected role
            if (govRole.value === "supervisor") {
                window.location.href = "view_complaints_supervisor.html";
            } else if (govRole.value === "first_responder") {
                window.location.href = "view_complaints_first_responder.html";
            }
        }
    }

    // You can also proceed with the form submission logic here if needed
    this.submit(); // Submit the form
});
