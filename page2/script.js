// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create background hearts - optimized for performance
function createBackgroundHearts() {
    const container = document.createElement('div');
    container.className = 'bg-hearts';
    document.body.appendChild(container);

    const heartCount = 6; // Keeping reduced count for better performance
    const colors = [
        'rgba(255, 182, 193, 0.2)',
        'rgba(255, 105, 180, 0.15)',
        'rgba(255, 192, 203, 0.2)',
        'rgba(255, 20, 147, 0.1)'
    ];
    const heartTypes = ['❤', '💗', '💓']; // Limited variety for better performance
    
    // Create a document fragment for better performance when appending multiple elements
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.setProperty('--float-duration', `${Math.random() * 25 + 30}s`); // Even slower, smoother animation
        heart.style.fontSize = `${Math.random() * 12 + 12}px`; 
        heart.style.opacity = Math.random() * 0.1 + 0.05; // Light opacity for better performance
        // Add transform for hardware acceleration
        heart.style.transform = 'translateZ(0)';
        fragment.appendChild(heart);
    }
    
    container.appendChild(fragment);
}

// Enhanced floating hearts - optimized for smoother animations
function createFloatingHearts() {
    const container = document.createElement('div');
    container.className = 'floating-hearts-container';
    document.body.appendChild(container);

    const colors = [
        '#ff6ec4', '#ff4e91', '#ff69b4', '#ff1493'
    ];
    const heartCount = 8; // Keeping reduced count for better performance
    const heartTypes = ['❤', '💗', '💓']; // Limited variety
    
    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.setProperty('--heart-color', colors[Math.floor(Math.random() * colors.length)]);
        heart.style.left = `${Math.random() * 100}vw`;
        // Longer duration for smoother animation
        heart.style.setProperty('--float-duration', `${Math.random() * 12 + 12}s`);
        // Staggered animation starts for smoother overall effect
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heart.style.fontSize = `${Math.random() * 10 + 10}px`;
        // Add transform for hardware acceleration
        heart.style.transform = 'translateZ(0)';
        fragment.appendChild(heart);
    }
    
    container.appendChild(fragment);
}

// Memory data - replace placeholder images with your actual images and add your captions
const memories = [
    {
        image: "./image/pic1.jpg",
        caption: "A great moment of virtual collaboration! Distance doesn't matter when minds connect.",
        isGif: false,
        rotationAngle: -2,
        emoji: "🌊"
    },
    {
        image: "./image/pic2.jpg",
        caption: "Some moments are beyond just smiles—they're pure chapters of joy written on our hearts forever. This one? Unforgettable",
        isGif: false,
        rotationAngle: 3,
        emoji: "🌅"
    },
    {
        image: "./image/pic5.jpg",
        caption: "Time may pass, but the vibe in this photo stays eternal. A snapshot of genuine connection and carefree spirits",
        isGif: false,
        rotationAngle: 2,
        emoji: "🏖️"
    },
    
    {
        image: "./image/pic3.jpg",
        caption: " glimpse into tradition and connection—beautiful and heartfelt!",
        isGif: true,
        rotationAngle: -1,
        emoji: "🚗"
    },
    {
        image: "./image/pic4.jpg",
        caption: "When friendship feels like family ❤️ From endless laughter to unspoken understanding — some bonds are simply timeless",
        isGif: false,
        rotationAngle: 2,
        emoji: "🍕"
    },
    {
        image: "./image/pic6.jpg",
        caption: "Laughter, light, and people who matter—this picture freezes the kind of day we wish we could replay endlessly.",
        isGif: false,
        rotationAngle: -3,
        emoji: "🏕️"
    },
    {
        image: "./image/pic7.jpg",
        caption: "You’re not just my best friend, you’re my safe space, my biggest cheerleader, and my forever vibe. This moment? Just one of many that made me thankful for you",
        isGif: false,
        rotationAngle: -2,
        emoji: "🏰"
    },
    {
        image: "./image/pic8.jpg",
        caption: "Some souls just instantly connect — she walked in as a friend and became my forever constant. Grateful for every laugh, tear, and memory we’ve shared",
        isGif: false,
        rotationAngle: 2,
        emoji: "🏖️"
    },
    
];

// Create confetti elements with enhanced colors and shapes - optimized for performance
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff6ec4', '#ff4e91', '#ff69b4', '#ff1493'];
    const shapes = ['circle', 'heart'];
    
    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    // Use requestAnimationFrame to avoid blocking the main thread
    requestAnimationFrame(() => {
        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.classList.add(`confetti-${shape}`);
            
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = Math.random() * 8 + 4 + 'px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Longer duration for smoother animation
            const duration = Math.random() * 6 + 6;
            // More staggered delays to distribute processing
            const delay = Math.random() * 3;
            
            confetti.style.animation = `floatDown ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s infinite`;
            confetti.style.opacity = Math.random() * 0.3 + 0.2;
            
            // Hardware acceleration
            confetti.style.transform = 'translateZ(0)';
            fragment.appendChild(confetti);
        }
        
        confettiContainer.appendChild(fragment);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createConfetti();
    createFloatingHearts();
    createBackgroundHearts();
    
    const galleryElement = document.getElementById('memoryGallery');
    const startSlideshowBtn = document.getElementById('startSlideshow');
    const pauseSlideshowBtn = document.getElementById('pauseSlideshow');
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');
    
    let slideshowInterval;
    let currentSlide = 0;
    let loadedImages = 0;
    const totalImages = memories.length;

    // Generate memory cards with lazy loading and optimized animations
    const cardCreationDelay = 50; // ms between card creations for smoother loading
    
    // Create cards with a small delay between them to distribute the processing load
    memories.forEach((memory, index) => {
        setTimeout(() => {
            const memoryCard = document.createElement('div');
            memoryCard.className = 'memory-card';
            memoryCard.style.setProperty('--rotate', `${memory.rotationAngle}deg`);
            
            const tapeElement = document.createElement('div');
            tapeElement.className = 'card-tape';
            tapeElement.style.setProperty('--rotate', `${memory.rotationAngle * 2}deg`);
            
            const imgElement = document.createElement('img');
            imgElement.className = 'memory-img';
            imgElement.alt = `Memory ${index + 1}`;
            imgElement.loading = 'lazy';
            imgElement.decoding = 'async'; // Add async decoding for better performance
            
            // Set image source directly and log to console for debugging
            imgElement.src = memory.image;
            console.log('Loading image:', memory.image);
            
            // Add error handler to see if image loading fails
            imgElement.onerror = function() {
                console.error('Failed to load image:', memory.image);
            };
            
            // Add load handler to confirm successful loading
            imgElement.onload = function() {
                console.log('Successfully loaded image:', memory.image);
                loadedImages++;
                if (loadedImages === totalImages) {
                    document.querySelector('.slideshow-controls').style.opacity = '1';
                }
            };
            
            const captionElement = document.createElement('div');
            captionElement.className = 'memory-caption';
            captionElement.textContent = memory.caption;
            
            const stickerElement = document.createElement('div');
            stickerElement.className = 'card-sticker';
            stickerElement.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#ff6ec4" />
                <text x="50" y="65" font-family="Arial" font-size="40" text-anchor="middle" fill="white">${memory.emoji}</text>
            </svg>`;
            
            memoryCard.appendChild(tapeElement);
            memoryCard.appendChild(imgElement);
            memoryCard.appendChild(captionElement);
            memoryCard.appendChild(stickerElement);
            galleryElement.appendChild(memoryCard);
        }, index * cardCreationDelay);
    });

    // Force all cards to be visible immediately instead of using intersection observer
    // This is a simpler approach to ensure all images display
    setTimeout(() => {
        document.querySelectorAll('.memory-card').forEach((card, index) => {
            card.style.animationDelay = `${0.03 * index}s`; // Reduced delay between cards
            card.classList.add('visible'); // Add visible class to all cards
        });
    }, 500); // Small delay to ensure DOM is ready

    // Enhanced smooth slideshow functionality
    function startSlideshow() {
        if (slideshowInterval) clearInterval(slideshowInterval);
        
        startSlideshowBtn.style.display = 'none';
        pauseSlideshowBtn.style.display = 'flex';
        
        // Select all memory cards
        const cards = document.querySelectorAll('.memory-card');
        if (cards.length === 0) return;
        
        // Auto-scroll to first slide with smooth animation
        if (currentSlide === 0) {
            autoScrollToCard(cards[0]);
        }
        
        // Set interval for slideshow with requestAnimationFrame for smoother timing
        const slideInterval = 4000; // Longer time between slides for smoother experience
        let lastTime = performance.now();
        
        // Using both setInterval and requestAnimationFrame for more reliable timing
        slideshowInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % cards.length;
            
            // Use requestAnimationFrame for smoother animations
            requestAnimationFrame(() => {
                autoScrollToCard(cards[currentSlide]);
                
                // Stagger effects for better performance
                setTimeout(() => {
                    addSparkleEffect(cards[currentSlide]);
                }, 100);
                
                setTimeout(() => {
                    createHeartBurst(cards[currentSlide]);
                }, 700);
            });
        }, slideInterval);
    }

    // Enhanced helper function to scroll to a card with better performance
    function autoScrollToCard(card) {
        const gallery = document.getElementById('memoryGallery');
        const cardRect = card.getBoundingClientRect();
        const galleryRect = gallery.getBoundingClientRect();
        
        // Calculate the scroll position
        const scrollTo = card.offsetLeft - (galleryRect.width / 2) + (cardRect.width / 2);
        
        // Smooth scroll to the card with ease-out animation for better feel
        gallery.scrollTo({
            left: scrollTo,
            behavior: 'smooth'
        });
        
        // More optimized way to update card styles using classes instead of inline styles
        // Remove highlight from all cards
        document.querySelectorAll('.memory-card').forEach(c => {
            c.classList.remove('card-highlighted');
        });
        
        // Add highlight to current card
        // Use a class instead of inline styles for better performance
        requestAnimationFrame(() => {
            card.classList.add('card-highlighted');
        });
        
        // Add CSS class for card-highlighted in your CSS:
        // .card-highlighted {
        //     transform: translateY(-10px) rotate(var(--rotate)) !important;
        //     box-shadow: 0 15px 35px rgba(255, 105, 180, 0.5), 0 0 20px rgba(255, 192, 203, 0.6) !important;
        // }
    }

    // Event listeners for slideshow controls
    startSlideshowBtn.addEventListener('click', startSlideshow);
    pauseSlideshowBtn.addEventListener('click', function() {
        pauseSlideshowBtn.style.display = 'none';
        startSlideshowBtn.style.display = 'flex';
        
        // Clear interval to stop slideshow
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
    });

    // Event listeners for navigation buttons
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html'; // Adjust this to your welcome page URL
    });

    nextButton.addEventListener('click', function() {
        window.location.href = 'cake.html'; // Adjust this to your next surprise page URL
    });

    // Scroll animations with GSAP
    gsap.from('.header', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'back.out(1.7)'
    });

    gsap.from('.navigation-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });

    // Add animation to stickers
    gsap.utils.toArray('.sticker').forEach(sticker => {
        gsap.to(sticker, {
            rotation: 'random(-20, 20)',
            duration: 'random(2, 4)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });

    // Enhanced hover effect for memory cards
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.08,
                boxShadow: '0 20px 40px rgba(255, 105, 180, 0.6)',
                duration: 0.4,
                ease: 'power2.out'
            });

            // Create heart burst effect
            createHeartBurst(this);
            
            // Add sparkle effect
            addSparkleEffect(this);
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                boxShadow: '0 10px 25px rgba(255, 105, 180, 0.3)',
                duration: 0.3,
                ease: 'power2.in'
            });
        });

        // Add click animation
        card.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();

            // Create explosive heart burst
            createExplosiveHeartBurst(this);
            
            // Create circular sparkle wave
            createSparkleWave(this);
            
            // Zoom effect with GSAP
            gsap.timeline()
                .to(this, {
                    scale: 1.15,
                    duration: 0.3,
                    ease: 'power2.out'
                })
                .to(this, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.5)'
                });

            // Add floating hearts around the card
            createFloatingHeartsAround(this);
        });
    });

    // Enhanced heart burst effect
    function createHeartBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const heartColors = ['#ff6ec4', '#ff4e91', '#ff69b4', '#ff1493'];
        const heartCount = 10; // Keeping reduced count for performance
        
        // Create heart elements in a document fragment
        const fragment = document.createDocumentFragment();
        const hearts = [];
        
        // Use requestAnimationFrame to avoid blocking the main thread
        requestAnimationFrame(() => {
            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.textContent = '❤';
                heart.style.position = 'fixed';
                heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
                heart.style.left = `${centerX}px`;
                heart.style.top = `${centerY}px`;
                heart.style.fontSize = `${Math.random() * 10 + 10}px`;
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1000';
                heart.style.opacity = Math.random() * 0.5 + 0.5;
                heart.style.textShadow = '0 0 5px rgba(255, 105, 180, 0.3)';
                heart.style.transform = 'translateZ(0)'; // Hardware acceleration
                heart.style.willChange = 'transform, opacity'; // Hint for browser optimization
                
                // Random direction angle
                const angle = Math.random() * Math.PI * 2;
                // Distance from center - vary more for natural effect
                const distance = Math.random() * 60 + 40;
                // Calculate final position
                const destinationX = centerX + Math.cos(angle) * distance;
                const destinationY = centerY + Math.sin(angle) * distance;
                
                fragment.appendChild(heart);
                hearts.push({
                    element: heart,
                    destinationX,
                    destinationY
                });
            }
            
            document.body.appendChild(fragment);
            
            // Animate with GSAP - staggered for smoother effect
            hearts.forEach((heart, index) => {
                gsap.to(heart.element, {
                    left: heart.destinationX,
                    top: heart.destinationY,
                    opacity: 0,
                    fontSize: '+=10',
                    duration: 1 + Math.random() * 1.5,
                    delay: index * 0.03, // Slightly stagger animations
                    ease: 'power2.out',
                    onComplete: () => {
                        if (heart.element.parentNode) {
                            document.body.removeChild(heart.element);
                        }
                    }
                });
            });
        });
    }

    // Enhanced sparkle effect
    function addSparkleEffect(element) {
        const sparkleCount = 3;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle-effect';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${i * 0.2}s`;
            element.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1500);
        }
    }

    // Function to create explosive heart burst
    function createExplosiveHeartBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const burstCount = 24;
        const heartTypes = ['❤', '💗', '💓', '💕', '💖', '💘', '💝'];
        const colors = ['#ff6ec4', '#ff4e91', '#ff69b4', '#ff1493', '#ff8da1', '#ffb6c1'];

        for (let i = 0; i < burstCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'explosion-heart';
            heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.left = centerX + 'px';
            heart.style.top = centerY + 'px';
            heart.style.fontSize = `${Math.random() * 15 + 20}px`;
            heart.style.textShadow = '0 0 10px rgba(255, 105, 180, 0.7)';
            
            const angle = (i / burstCount) * Math.PI * 2;
            const velocity = Math.random() * 200 + 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            gsap.to(heart, {
                x: vx,
                y: vy,
                scale: 0,
                opacity: 0,
                rotation: Math.random() * 360,
                duration: 1.5,
                ease: 'power2.out',
                onComplete: () => heart.remove()
            });
            
            document.body.appendChild(heart);
        }
    }

    // Function to create sparkle wave
    function createSparkleWave(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const wave = document.createElement('div');
        wave.className = 'sparkle-wave';
        wave.style.left = centerX + 'px';
        wave.style.top = centerY + 'px';
        
        document.body.appendChild(wave);
        
        gsap.to(wave, {
            scale: 2,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => wave.remove()
        });

        // Create multiple waves
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const delayedWave = document.createElement('div');
                delayedWave.className = 'sparkle-wave';
                delayedWave.style.left = centerX + 'px';
                delayedWave.style.top = centerY + 'px';
                
                document.body.appendChild(delayedWave);
                
                gsap.to(delayedWave, {
                    scale: 2,
                    opacity: 0,
                    duration: 1,
                    delay: i * 0.2,
                    ease: 'power2.out',
                    onComplete: () => delayedWave.remove()
                });
            }, i * 200);
        }
    }

    // Function to create floating hearts around clicked card
    function createFloatingHeartsAround(element) {
        const rect = element.getBoundingClientRect();
        const heartCount = 8;
        const heartTypes = ['❤', '💗', '💓', '💕', '💖'];
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-click-heart';
            heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
            
            const angle = (i / heartCount) * Math.PI * 2;
            const radius = Math.random() * 30 + 80;
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;
            
            heart.style.left = startX + 'px';
            heart.style.top = startY + 'px';
            
            document.body.appendChild(heart);
            
            gsap.to(heart, {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                scale: Math.random() * 0.5 + 0.5,
                rotation: Math.random() * 360,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.to(heart, {
                        y: -100,
                        opacity: 0,
                        duration: 0.8,
                        delay: Math.random() * 0.5,
                        ease: 'power2.in',
                        onComplete: () => heart.remove()
                    });
                }
            });
        }
    }

    // Add ripple effect to cards on click with improved performance
    document.addEventListener('click', (event) => {
        const target = event.target;
        const memoryCard = target.closest('.memory-card');
        
        if (memoryCard) {
            // Throttle effect creation to prevent performance issues on rapid clicks
            if (!memoryCard.dataset.effectCooldown) {
                memoryCard.dataset.effectCooldown = 'true';
                
                // Create effects with requestAnimationFrame for smoother rendering
                requestAnimationFrame(() => {
                    // Create heart burst effect
                    createExplosiveHeartBurst(memoryCard);
                    
                    // Create sparkle wave
                    createSparkleWave({
                        x: event.clientX,
                        y: event.clientY
                    });
                    
                    // Create floating hearts
                    createFloatingHeartsAround(memoryCard);
                    
                    // Clear cooldown after a delay
                    setTimeout(() => {
                        delete memoryCard.dataset.effectCooldown;
                    }, 300); // 300ms cooldown between effects
                });
            }
        }
    });

    // Auto scroll to show the gallery with smoother timing
    setTimeout(() => {
        const galleryContainer = document.querySelector('.gallery-container');
        requestAnimationFrame(() => {
            galleryContainer.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        });
    }, 1200); // Slightly longer delay for smoother initial load experience
});