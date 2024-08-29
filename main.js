// main.js

document.addEventListener('DOMContentLoaded', function () {
    const formMessage = document.createElement('div');
    const form = document.querySelector('form');

    // Check if the form exists (since the form was removed from the contact page)
    if (form) {
        formMessage.className = 'form-message';
        form.appendChild(formMessage);

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            formMessage.textContent = ''; // Clear previous messages

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'form-message error';
                return;
            }

            if (!validateEmail(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.className = 'form-message error';
                return;
            }

            // If validation passes
            formMessage.textContent = 'Thank you for your message!';
            formMessage.className = 'form-message success';
            form.reset(); // Clear the form fields
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
