document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // These IDs are from your EmailJS account
    emailjs.sendForm('service_kxo0xkx', 'template_23d5ce5', this)
        .then(function() {
            document.getElementById('status').innerText = 'Message sent successfully!';
        }, function(error) {
            document.getElementById('status').innerText = 'Failed to send the message.';
        });
});