document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const usernameInput = form.querySelector("input[placeholder='Username']");
	const emailInput = form.querySelector("input[placeholder='Email']");
	const phoneInput = form.querySelector("input[placeholder='Phone Number']");
	const passwordInput = form.querySelector("input[placeholder='Password']");
	
	form.addEventListener("submit", (event) => {
	  event.preventDefault(); // Prevent form submission to allow validation
	  
	  let isValid = true;
	  clearErrors();
	  
	  // Validate Username
	  if (usernameInput.value.trim() === "") {
		showError(usernameInput, "Username is required");
		isValid = false;
	  }
	  
	  // Validate Email
	  if (!validateEmail(emailInput.value)) {
		showError(emailInput, "Please enter a valid email address");
		isValid = false;
	  }
	  
	  // Validate Phone Number
	  if (!validatePhone(phoneInput.value)) {
		showError(phoneInput, "Please enter a valid phone number");
		isValid = false;
	  }
	  
	  // Validate Password
	  if (passwordInput.value.trim().length < 6) {
		showError(passwordInput, "Password must be at least 6 characters long");
		isValid = false;
	  }
	  
	  if (isValid) {
		alert("Sign-up successful!");
		form.reset();
	  }
	});
	
	// Function to show error message
	function showError(input, message) {
	  const parent = input.parentElement;
	  const error = document.createElement("span");
	  error.textContent = message;
	  error.style.color = "red";
	  error.style.fontSize = "12px";
	  error.style.display = "block";
	  error.style.marginTop = "5px";
	  parent.appendChild(error);
	  input.style.borderColor = "red";
	}
	
	// Function to clear previous errors
	function clearErrors() {
	  const errors = form.querySelectorAll("span");
	  errors.forEach((error) => error.remove());
	  const inputs = form.querySelectorAll("input");
	  inputs.forEach((input) => (input.style.borderColor = ""));
	}
	
	// Email validation function
	function validateEmail(email) {
	  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return regex.test(email);
	}
	
	// Phone number validation function
	function validatePhone(phone) {
	  const regex = /^\d{10}$/; // Assumes 10-digit phone number
	  return regex.test(phone);
	}
  });
  