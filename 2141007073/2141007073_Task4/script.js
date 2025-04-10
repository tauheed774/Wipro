// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for project details
const projects = document.querySelectorAll('.project');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

projects.forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h3').innerText;
        const description = project.querySelector('p').innerText;

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${title}</h2>
                <p>${description}</p>
            </div>
        `;
        modal.style.display = 'block';

        // Close modal functionality
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form validation for contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const responseDiv = document.getElementById('formResponse');
        responseDiv.innerHTML = <p>Thank you, ${name}! Your message has been sent.</p>;
        responseDiv.style.color = 'green';
    } else {
        alert('Please fill out all fields.');
    }
});

// Theme toggle functionality
const themeToggle = document.createElement('button');
themeToggle.innerText = 'Toggle Dark/Light Theme';
document.body.insertBefore(themeToggle, document.body.firstChild);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
