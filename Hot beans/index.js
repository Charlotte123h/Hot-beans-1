document.getElementById('job-application-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume = document.getElementById('resume').value;
  
    // Simple validation
    if (name && email && resume) {
      alert('Thank you for your application! We will review your details and get back to you soon.');
      // Here you can add code to send the form data to a server
    } else {
      alert('Please fill out all fields.');
    }
  });