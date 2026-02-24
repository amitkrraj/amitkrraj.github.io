const cname = document.getElementById('formname');
const cemail = document.getElementById('formemail');
const csubject = document.getElementById('formsubject');
const cmessage = document.getElementById('formmessage');
const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

// Validation functions
function validateEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
}

function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    successMsg.textContent = '';
    successMsg.style.display = 'none';

    // Validate name
    if (!cname.value.trim()) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else if (cname.value.trim().length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }

    // Validate email
    if (!cemail.value.trim()) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(cemail.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Validate subject
    if (!csubject.value.trim()) {
        document.getElementById('subjectError').textContent = 'Subject is required';
        isValid = false;
    } else if (csubject.value.trim().length < 3) {
        document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters';
        isValid = false;
    }

    // Validate message
    if (!cmessage.value.trim()) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } else if (cmessage.value.trim().length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }

    return isValid;
}

function sendMsg() {
    if (validateForm()) {
        // Create mailto link
        const link = \"mailto:amitkrraj.cse@gmail.com?subject=\" +
                    encodeURIComponent(csubject.value) +
                    \"&body=\" + encodeURIComponent(
                        'From: ' + cname.value + '\\n' +
                        'Email: ' + cemail.value + '\\n\\n' +
                        cmessage.value
                    );

        // Open mailto
        window.location.href = link;

        // Show success message
        successMsg.textContent = 'Message sent! Opening your email client...';
        successMsg.style.display = 'block';
        successMsg.style.color = '#28a745';

        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            successMsg.textContent = '';
            successMsg.style.display = 'none';
        }, 2000);
    }
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        sendMsg();
    });
}
