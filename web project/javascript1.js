document.getElementById("student-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const regNo = document.getElementById("regNo").value;
    const year = document.getElementById("year").value;
    const subject = document.getElementById("subject").value;

    // Sending the data to the backend
    const response = await fetch("http://localhost:3000/checkEligibility", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, regNo, year, subject }),
    });

    const result = await response.json();
    document.getElementById("result").innerText = result.message;
});
