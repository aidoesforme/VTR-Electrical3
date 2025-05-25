document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for booking an appointment with VTR Electrical! We will contact you soon.');
    this.reset();
});