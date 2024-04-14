document.addEventListener("DOMContentLoaded", function() {
    // Form validation
    const form = document.querySelector("#contactForm");
  
    form.addEventListener("submit", function(event) {
      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");
      const messageInput = document.querySelector("#message");
      let valid = true;
  
      // Check if name field is empty
      if (nameInput.value.trim() === "") {
        setErrorFor(nameInput, "Name cannot be blank");
        valid = false;
      } else {
        setSuccessFor(nameInput);
      }
  
      // Check if email field is empty and is a valid email format
      if (emailInput.value.trim() === "") {
        setErrorFor(emailInput, "Email cannot be blank");
        valid = false;
      } else if (!isEmail(emailInput.value.trim())) {
        setErrorFor(emailInput, "Email is not valid");
        valid = false;
      } else {
        setSuccessFor(emailInput);
      }
  
      // Check if message field is empty
      if (messageInput.value.trim() === "") {
        setErrorFor(messageInput, "Message cannot be blank");
        valid = false;
      } else {
        setSuccessFor(messageInput);
      }
  
      if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");
      formControl.className = "form-control error";
      small.innerText = message;
    }
  
    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    }
  
    function isEmail(email) {
      // Regular expression for validating email
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    // Toggle elements
    const toggleButton = document.querySelector("#toggleButton");
    const toggleContent = document.querySelector("#toggleContent");
  
    toggleButton.addEventListener("click", function() {
      toggleContent.classList.toggle("hidden");
    });
  });
  
  