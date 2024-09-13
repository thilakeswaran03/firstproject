document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('student-form').addEventListener('submit', async function (e) {
        e.preventDefault();
        
        // Get form data
        const regNo = document.getElementById('regNo').value;
        const subMand = document.getElementById('subject').value;
        
        try {
            // Send data to the Flask backend (adjust URL if needed)
            const response = await fetch('http://localhost:5000/check_eligibility', {  // Use absolute URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    regNo: regNo,
                    subMand: subMand
                }),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Get the result from backend and display it
            const result = await response.json();
            if (result.eligible) {
                document.getElementById('result').innerText = 'The subject is eligible for online certification.';
            } else {
                document.getElementById('result').innerText = 'The subject is NOT eligible for online certification.';
            }
        } catch (error) {
            document.getElementById('result').innerText = 'Error checking eligibility: ' + error.message;
            console.error('Error:', error);
        }
    });
});
