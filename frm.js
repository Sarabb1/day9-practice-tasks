document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.textContent = '';

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    let valid = true;

    if (username === '') {
        errorMessages.textContent += 'Username is required.\n';
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        errorMessages.textContent += 'Email is required.\n';
        valid = false;
    } else if (!emailPattern.test(email)) {
        errorMessages.textContent += 'Email is not valid!!\n';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});
