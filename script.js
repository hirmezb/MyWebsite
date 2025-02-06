tsParticles.load("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00adb5"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00adb5",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Show navbar when scrolling past the hero section
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.8) {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
});
