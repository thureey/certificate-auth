
// Sample list of valid certificate numbers
const validCertificates = {
    "ABC123": "John Doe, Issued: Jan 2024",
    "DEF456": "Jane Smith, Issued: Feb 2024",
    "XYZ789": "Alex Johnson, Issued: Mar 2024"
};

function authenticateCertificate() {
    const certNumber = document.getElementById("certificateNumber").value.trim();
    const resultDiv = document.getElementById("result");

    if (validCertificates[certNumber]) {
        resultDiv.textContent = `Certificate is valid! Details: ${validCertificates[certNumber]}`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Invalid certificate number.";
        resultDiv.style.color = "red";
    }
}
