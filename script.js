// ==================
// = TravelFar Data =
// ==================

const travelData = {
    beaches: [
        {
            id: 1,
            name: "Maldives Paradise Beach",
            location: "Maldives",
            description: "Experience crystal-clear turquoise waters and pristine white sand beaches in this tropical paradise. Perfect for snorkeling, diving, and romantic getaways.",
            images: [
                "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&h=600&fit=crop"
            ],
            type: "beach"
        },
        {
            id: 2,
            name: "Bora Bora",
            location: "French Polynesia",
            description: "Surrounded by a lagoon and a barrier reef, Bora Bora offers stunning overwater bungalows and world-class diving opportunities in the heart of the South Pacific.",
            images: [
                "https://images.unsplash.com/photo-1589197331516-2e2cd2f242c2?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
            ],
            type: "beach"
        }
    ],
    temples: [
        {
            id: 3,
            name: "Angkor Wat",
            location: "Cambodia",
            description: "The largest religious monument in the world, this magnificent temple complex showcases the pinnacle of Khmer architecture and is a UNESCO World Heritage site.",
            images: [
                "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&fit=crop"
            ],
            type: "temple"
        },
        {
            id: 4,
            name: "Kyoto Temples",
            location: "Japan",
            description: "Explore thousands of sacred Shinto shrines and Buddhist temples, including the iconic Fushimi Inari-taisha with its thousands of vermillion torii gates.",
            images: [
                "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop"
            ],
            type: "temple"
        }
    ]
};

// ================
// = DOM Elements =
// ================

document.addEventListener('DOMContentLoaded', function() {
    // Recommendation containers
    const beachContainer = document.getElementById('beachRecommendations');
    const templeContainer = document.getElementById('templeRecommendations');

    // ===========================
    // Initialize Recommendations
    // ===========================
    if (beachContainer) {
        displayRecommendations(travelData.beaches, beachContainer);
    }

    if (templeContainer) {
        displayRecommendations(travelData.temples, templeContainer);
    }
    // Navigation
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navbar__menu');

    // ===========================
    // Mobile Navigation Toggle
    // ===========================
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('navbar__menu--active');
        });
    }

    // ===========================
    // Contact Form Submission
    // ===========================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            const formMessage = document.getElementById('formMessage');
            formMessage.style.display = 'block';
            formMessage.textContent = `Thank you, ${formData.name}! Your message has been received. We'll get back to you at ${formData.email} soon.`;
            formMessage.className = 'contact__form-message contact__form-message--success';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// = Display Recommendations =
// ===========================
function displayRecommendations(destinations, container) {
    container.innerHTML = destinations.map(dest => createDestinationCard(dest)).join('');

    // Initialize image carousels
    destinations.forEach(dest => {
        initializeImageCarousel(dest.id);
    });
}

// ===========================
// = Create Destination Card =
// ===========================
function createDestinationCard(destination) {
    return `
        <div class="card" data-id="${destination.id}">
            <div class="card__images" id="images-${destination.id}">
                <img src="${destination.images[0]}" alt="${destination.name}" class="card__image" data-index="0">
                <div class="card__image-nav">
                    ${destination.images.map((_, index) => `
                        <span class="card__image-dot ${index === 0 ? 'card__image-dot--active' : ''}" data-index="${index}"></span>
                    `).join('')}
                </div>
            </div>
            <div class="card__content">
                <h3 class="card__title">${destination.name}</h3>
                <p class="card__location">📍 ${destination.location}</p>
                <p class="card__description">${destination.description}</p>
                <a href="#" class="card__button" onclick="bookDestination(event, '${destination.name}')">Learn More</a>
            </div>
        </div>
    `;
}

// ==================
// = Image Carousel =
// ==================
function initializeImageCarousel(destinationId) {
    const allDestinations = [...travelData.beaches, ...(travelData.temples || [])];
    const destination = allDestinations.find(d => d.id === destinationId);
    if (!destination) return;

    const imageContainer = document.getElementById(`images-${destinationId}`);
    if (!imageContainer) return;

    const dots = imageContainer.querySelectorAll('.card__image-dot');
    const img = imageContainer.querySelector('.card__image');

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);

            // Update image
            img.src = destination.images[index];
            img.dataset.index = index;

            // Update active dot
            dots.forEach(d => d.classList.remove('card__image-dot--active'));
            this.classList.add('card__image-dot--active');
        });
    });
}

// ====================
// = Book Destination =
// ====================
function bookDestination(event, destinationName) {
    event.preventDefault();
    alert(`Great choice! You've selected ${destinationName}. In a real application, this would take you to a booking page.`);
}

console.log('TravelFar Website Loaded');
console.log('Beach Destinations:', travelData.beaches.length);
