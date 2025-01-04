document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
            opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 150, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });

    // Typing effect for the heading on the home page
    if (document.getElementById('typing-effect')) {
        const text = "Welcome to My Website";
        let index = 0;
        const typingEffect = document.getElementById('typing-effect');

        function type() {
            if (index < text.length) {
                typingEffect.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 150);
            }
        }

        type();
    }

    // Search icon click effect on the home page
    if (document.querySelector('.search-icon')) {
        const searchIcon = document.querySelector('.search-icon');
        const searchBar = document.querySelector('.search-bar');
        const searchInput = document.getElementById('search-input');

        searchIcon.addEventListener('click', function() {
            searchBar.style.display = 'block';
            searchInput.value = ''; // Clear the search input field
            setTimeout(() => {
                searchBar.style.opacity = '1';
                searchInput.focus();
            }, 10);
        });

        // Search functionality
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        searchInput.addEventListener('input', function() {
            searchInput.classList.add('typing');
        });

        searchInput.addEventListener('blur', function() {
            searchInput.classList.remove('typing');
        });

        function performSearch() {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        }
    }

    // Automatic carousel for mobile
    const boxContainer = document.querySelector('.box-container');
    let currentIndex = 0;
    let autoScrollInterval;

    function autoScroll() {
        if (window.innerWidth <= 768 && boxContainer) {
            currentIndex = (currentIndex + 1) % boxContainer.children.length;
            boxContainer.scrollTo({
                left: boxContainer.children[currentIndex].offsetLeft,
                behavior: 'smooth'
            });
        }
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(autoScroll, 3000); // Adjust the interval as needed
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start the carousel
    if (boxContainer) {
        startAutoScroll();

        // Pause carousel on hover
        boxContainer.addEventListener('mouseenter', stopAutoScroll);
        boxContainer.addEventListener('mouseleave', startAutoScroll);
    }
});
