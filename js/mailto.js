// Get form elements safely
function getFormElements() {
    return {
        cname: document.getElementById('formname'),
        cemail: document.getElementById('formemail'),
        csubject: document.getElementById('formsubject'),
        cmessage: document.getElementById('formmessage'),
        contactForm: document.getElementById('contactForm'),
        successMsg: document.getElementById('successMsg')
    };
}

// Validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    const { cname, cemail, csubject, cmessage, successMsg } = getFormElements();

    // Check if elements exist
    if (!cname || !cemail || !csubject || !cmessage) {
        console.error('Form elements not found');
        return false;
    }

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    if (successMsg) {
        successMsg.textContent = '';
        successMsg.style.display = 'none';
    }
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
    const { cname, cemail, csubject, cmessage, contactForm, successMsg } = getFormElements();

    if (validateForm()) {
        const link = "mailto:amitkrraj.cse@gmail.com?subject=" + encodeURIComponent(csubject.value) + "&body=" + encodeURIComponent(cmessage.value);
        window.open(link);

        // Show success message
        if (successMsg) {
            successMsg.textContent = 'Opening your mail...';
            successMsg.style.display = 'block';
            successMsg.style.color = '#28a745';

            // Reset form after a delay
            setTimeout(() => {
                if (contactForm) contactForm.reset();
                successMsg.textContent = '';
                successMsg.style.display = 'none';
            }, 2000);
        }
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const { contactForm } = getFormElements();
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendMsg();
        });
    }
});
