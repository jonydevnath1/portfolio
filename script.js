// Preloader script
window.addEventListener('load', function () {
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    }, 1000);
});

// toggle menubar
function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// form validation

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Input fields
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var terms = document.getElementById('terms').checked;

    // Validate input fields
    if (firstName === '') {
        document.getElementById("msg").innerHTML = "First name is required";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    }

    if (lastName === '') {
        document.getElementById("msg").innerHTML = "Last name is required";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    }

    if (email === '') {
        document.getElementById("msg").innerHTML = "Email is required";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    } else if (!validateEmail(email)) {
        document.getElementById("msg").innerHTML = "Please enter a valid email address";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    }

    if (phone === '') {
        document.getElementById("msg").innerHTML = "Phone number is required";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    }

    if (subject === '') {
        document.getElementById("msg").innerHTML = "Please select a subject";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    }

    if (message === '') {
        document.getElementById("msg").innerHTML = "Message is required";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    }

    if (!terms) {
        document.getElementById("msg").innerHTML = "You must accept the terms";
        document.getElementById("msg").style.color = "#D8000C";
        return;
    }

    // If all fields are 
    document.getElementById("msg").innerHTML = "Form submitted successfully!";
    document.getElementById("msg").style.color = "#270";

});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// scroll to top script
function scrollTopBtn() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}