// Contact Form Functionality

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("formMessage");

    message.textContent =
        "Thank you, " + name +
        "! Your message has been received.";

    contactForm.reset();

});


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Gallery Image Click Effect

document.querySelectorAll(".gallery-card").forEach(card => {

    card.addEventListener("click", function() {

        this.classList.toggle("selected");

    });

});