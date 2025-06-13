document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        // Simple client-side validation
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            e.preventDefault();
            return;
        }

        // Optional: Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
            return;
        }

        // Optional: Show a confirmation message
        alert('Thank you for contacting us! We will get back to you soon.');
        // If using mailto: or a backend, you may want to let the form submit naturally
        // e.preventDefault(); // Uncomment if you want to prevent actual submission
    });
});