// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // Allow time for fade-out
});

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.title = document.body.classList.contains('dark-mode')
        ? 'Need some light? Switch back to normal mode.'
        : 'Burning the midnight oil? Click here to save your eyes!';
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animation
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-level');
    const skillsSectionTop = skillsSection.getBoundingClientRect().top;

    if (skillsSectionTop < window.innerHeight - 100) {
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-skill-level') + '%';
        });
    }
});

// Fade-in and slide-in animations on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .zoom-in');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Animated counters
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const speed = 100; // Adjust speed here
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 50);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Sticky Navigation with Auto-hide
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px'; // Hide the navbar
    } else {
        navbar.style.top = '0'; // Show the navbar
    }
    lastScrollTop = scrollTop;
});

// Particle Background (Using Particles.js)
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#34495E"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#34495E",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
