document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const message = document.getElementById("formMessage");
  message.textContent = "Thanks! Your message has been received.";
  this.reset();
});