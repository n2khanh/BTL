function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordToggleBtn = document.getElementById("pass-toggle-btn");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggleBtn.classList.remove("fa-eye-slash");
      passwordToggleBtn.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      passwordToggleBtn.classList.remove("fa-eye");
      passwordToggleBtn.classList.add("fa-eye-slash");
    }
  }
  
  function validateForm() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var numberOfTickets = document.getElementById("numberOfTickets").value;
    var password = document.getElementById("password").value;
    var chair=document.getElementById("chair").value;
  
    // Regular expression for email validation.
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (fullname.trim() === "" || !email.match(emailPattern) || numberOfTickets < 1 || password.trim() === ""|| chair.trim() === "" ) {
      alert("Please fill in all the required fields with valid data.");
    } else {
      // Redirect to another page (change "newpage.html" to the desired URL).
      window.location.href = "../confirm/Confiming.html";
    }
  }