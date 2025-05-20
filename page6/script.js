// Create floating hearts for background animation
function createHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Random position and size
            heart.style.left = Math.random() * 100 + '%';
            heart.style.width = heart.style.height = Math.random() * 20 + 10 + 'px';
            
            // Animation duration
            heart.style.animationDuration = Math.random() * 10 + 5 + 's';
            
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 15000);
        }, i * 800);
    }
}

// Create initial hearts
createHearts();

// Repeat heart creation
setInterval(createHearts, 16000);