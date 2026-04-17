document.querySelector(".form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;

    const response = await fetch("https://****************-api.us-east-1.amazonaws.com/dev/submissions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    });

    alert("🚀CloudPulse: Your request has triggered the serverless workflow successfully!");
});