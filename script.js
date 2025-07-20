// Function to apply theme
function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
}

// Typing Animation
const roles = ["Aspiring AI/ML Engineer", "Tech Enthusiast", "Frontend Developer"];
let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 100; // milliseconds
const deletingSpeed = 60; // milliseconds
const pauseBeforeDelete = 1500; // milliseconds
const pauseBeforeType = 400; // milliseconds

function type() {
    const target = document.getElementById("typing");
    if (!target || !target.isConnected) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        currentText = currentRole.substring(0, charIndex--);
    } else {
        currentText = currentRole.substring(0, charIndex++);
    }

    target.textContent = currentText;

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex > currentRole.length) {
        delay = pauseBeforeDelete;
        isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = pauseBeforeType;
    }

    setTimeout(type, delay);
}

// Initialize tsparticles function
const initParticles = async () => {
    await tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#00bcd4", // Replaced var(--primary) with a direct color for fallback
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false,
                },
            },
            size: {
                value: { min: 1, max: 3 },
                random: true,
                animation: {
                    enable: false,
                    speed: 40,
                    minimumValue: 0.1,
                    sync: false,
                },
            },
            links: {
                enable: true,
                distance: 150,
                color: "#00bcd4", // Same here for consistency
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out"
                },
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                },
                onclick: {
                    enable: false,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1,
                    },
                },
                push: {
                    quantity: 4,
                },
            },
        },
        retina_detect: true,
    });
};

// DOMContentLoaded Listener for all initial setup
document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        applyTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    const typingTarget = document.getElementById("typing");
    if (typingTarget) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    type();
                    obs.disconnect();
                }
            });
        }, { threshold: 0.8 });
        observer.observe(typingTarget);
    }

    if (typeof tsParticles !== 'undefined') {
        const particlesContainer = document.getElementById("tsparticles");
        if (particlesContainer) {
            initParticles();
        }
    } else {
        console.error("tsParticles library not loaded or available.");
    }

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('is-animated');

                if (element.classList.contains('skill-item')) {
                    const skillBar = element.querySelector('.skill-bar');
                    const level = skillBar?.getAttribute('data-level');
                    if (skillBar && level) {
                        skillBar.style.setProperty('--level', level);
                    }
                }
                animateObserver.unobserve(element);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    animateElements.forEach(element => animateObserver.observe(element));

    // Handle page load with hash
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    // ✅ NEW: Smooth scroll on link click for anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', targetId);
            }
        });
    });

    // Skills scroll controls
    const skillsTrack = document.querySelector('.skills-track');
    const leftScrollBtn = document.querySelector('.scroll-button.left-arrow');
    const rightScrollBtn = document.querySelector('.scroll-button.right-arrow');

    if (skillsTrack && leftScrollBtn && rightScrollBtn) {
        const updateScrollButtons = () => {
            leftScrollBtn.classList.toggle('hidden', skillsTrack.scrollLeft === 0);
            rightScrollBtn.classList.toggle('hidden', Math.ceil(skillsTrack.scrollLeft + skillsTrack.clientWidth) >= skillsTrack.scrollWidth);
        };

        rightScrollBtn.addEventListener('click', () => {
            skillsTrack.scrollBy({ left: skillsTrack.clientWidth, behavior: 'smooth' });
        });

        leftScrollBtn.addEventListener('click', () => {
            skillsTrack.scrollBy({ left: -skillsTrack.clientWidth, behavior: 'smooth' });
        });

        skillsTrack.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);
        updateScrollButtons();
    }
});
