// Initialize EmailJS
(function () {
  emailjs.init("10I_JgwGbXYmYoeWO"); // Replace with your EmailJS Public Key
})();

function sendEmail() {
  let form = document.getElementById("businessForm");

  // Collect form values
  let formData = {
    citizenship: document.getElementById("citizenship").value,
    idNumber: document.getElementById("idNumber").value,
    passportNumber: document.getElementById("passportNumber").value,
    otherNames: document.getElementById("otherNames").value,
    surname: document.getElementById("surname").value,
    nationality: document.getElementById("nationality").value,
    phone: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value,
    ownerDistrict: document.getElementById("ownerdistrict").value,
    businessType: document.getElementById("business-type").value,
    companyName: document.getElementById("company-name").value,
    tinNumber: document.getElementById("tin-number").value,
    registrationDate: document.getElementById("registration-date").value,
    businessDistrict: document.getElementById("businessdistrict").value,
    purposeOfImportation: document.getElementById("purposeOfImportation").value,
    otherPurpose: document.getElementById("otherPurpose").value,
    productCategory: document.getElementById("productCategory").value,
    productName: document.getElementById("productName").value,
    weight: document.getElementById("weight").value,
    unitOfMeasurement: document.getElementById("unitOfMeasurement").value,
    quantity: document.getElementById("quantity").value,
    description: document.getElementById("description").value,
  };

  // Validate required fields
  if (!formData.email) {
    alert("Please enter an email address.");
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_35il2y6", "template_u2za1mu", formData).then(
    function (response) {
      alert("Email sent successfully to " + formData.email);
      console.log("SUCCESS!", response.status, response.text);

      // Reset the form after successful submission
      form.reset();
    },
    function (error) {
      alert("Failed to send email.");
      console.error("FAILED...", error);
    }
  );
}
