const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');
const form = document.getElementById("myForm");
const message = document.getElementById("message");
var fs = require('fs');

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Perform validation or further processing if needed
    if (name && email) {
      // Display success message
      message.textContent = "Form submitted successfully!";
      message.style.color = "green";
      const user_data = name + ", " + email; 
      fs.writeFile("test/user_data.txt", user_data);
  
      // Clear the form fields
      form.reset();
    } else {
      // Display error message
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
    }
  });