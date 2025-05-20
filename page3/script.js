document.addEventListener('DOMContentLoaded', function() {
    // Audio elements
    const blowSound = document.getElementById('blow-sound');
    const lightSound = document.getElementById('light-sound');
    const celebrationSound = document.getElementById('celebration-sound');
    const backgroundMusic = document.getElementById('background-music');
    let soundEnabled = true;
    
    // Sound control
    const soundControl = document.getElementById('sound-control');
    const soundIcon = document.getElementById('sound-icon');
    
    // Initialize audio settings
    backgroundMusic.volume = 0.5; // Set volume to 50%
    backgroundMusic.load(); // Preload the audio
    
    // Function to toggle all audio
    const toggleAudio = (enabled) => {
        soundEnabled = enabled;
        if (enabled) {
            backgroundMusic.play();
            soundIcon.innerHTML = `
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            `;
        } else {
            backgroundMusic.pause();
            soundIcon.innerHTML = `
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
            `;
        }
    };

    // Function to ensure audio is ready
    const initializeAudio = () => {
        backgroundMusic.play().then(() => {
            console.log("Audio started successfully");
        }).catch(error => {
            console.log("Audio autoplay failed:", error);
            // Add a visible play button as fallback
            const playButton = document.createElement('button');
            playButton.textContent = "Play Music";
            playButton.style.position = "fixed";
            playButton.style.bottom = "20px";
            playButton.style.right = "20px";
            playButton.style.zIndex = "1000";
            playButton.onclick = () => {
                backgroundMusic.play();
                playButton.remove();
            };
            document.body.appendChild(playButton);
        });
    };

    // Try to play immediately
    initializeAudio();

    // Ensure audio plays on any user interaction
    const userInteractionEvents = ['click', 'touchstart', 'keydown'];
    userInteractionEvents.forEach(event => {
        document.addEventListener(event, function startAudio() {
            if (!backgroundMusic.playing) {
                backgroundMusic.play();
            }
            userInteractionEvents.forEach(e => {
                document.removeEventListener(e, startAudio);
            });
        }, { once: true });
    });
    
    soundControl.addEventListener('click', function() {
        toggleAudio(!soundEnabled);
    });

    // Function to play sound with mute check
    const playSound = (sound) => {
        if (soundEnabled) {
            sound.currentTime = 0;
            sound.play().catch(error => console.log("Error playing sound:", error));
        }
    };
    
    // Create icing drips
    const cake = document.querySelector('.cake');
    const icing = document.querySelector('.icing');
    
    for (let i = 0; i < 12; i++) {
      const drip = document.createElement('div');
      drip.className = 'icing-drip';
      drip.style.left = (i * 20) + 5 + 'px';
      drip.style.height = Math.floor(Math.random() * 15 + 10) + 'px';
      drip.style.animationDelay = (i * 0.2) + 's';
      icing.appendChild(drip);
    }
    
    // Add sprinkles
    for (let i = 0; i < 50; i++) {
      const sprinkle = document.createElement('div');
      sprinkle.className = 'sprinkles';
      sprinkle.style.backgroundColor = ['#ffeb3b', '#4caf50', '#3f51b5', '#ff4081'][Math.floor(Math.random() * 4)];
      sprinkle.style.left = Math.random() * 250 + 'px';
      sprinkle.style.top = Math.random() * 15 + 'px';
      sprinkle.style.transform = `rotate(${Math.random() * 180}deg)`;
      icing.appendChild(sprinkle);
    }
    
    // Create glitter effects
    setInterval(() => {
      const glitter = document.createElement('div');
      glitter.className = 'glitter';
      glitter.style.left = Math.random() * window.innerWidth + 'px';
      glitter.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(glitter);
      
      setTimeout(() => {
        glitter.remove();
      }, 1500);
    }, 200);
    
    // Create balloons
    const container = document.querySelector('.container');
    const colors = ['#ff4081', '#3f51b5', '#4caf50', '#ffeb3b', '#9c27b0', '#00bcd4'];
    
    for (let i = 0; i < 20; i++) {
      createBalloon();
    }
    
    function createBalloon() {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = Math.random() * window.innerWidth + 'px';
      balloon.style.animationDuration = Math.random() * 10 + 15 + 's';
      balloon.style.animationDelay = Math.random() * 5 + 's';
      balloon.style.transform = `scale(${Math.random() * 0.5 + 0.7})`;
      container.appendChild(balloon);
      
      setTimeout(() => {
        balloon.remove();
        createBalloon();
      }, (parseFloat(balloon.style.animationDuration) + parseFloat(balloon.style.animationDelay)) * 1000);
    }
    
    // Show Birthday Wish
    setTimeout(() => {
      const wishText = document.getElementById('wish-text');
      wishText.classList.add('show');
    }, 1000);
    
    // Setup candles hover effect
    const candles = document.querySelectorAll('.candle');
    const lightButton = document.getElementById('light-button');
    let allCandlesLit = true;
    let blownCandles = 0;
    
    candles.forEach((candle, index) => {
      const candleId = index + 1;
      const flame = document.getElementById(`flame-${candleId}`);
      const blowEffect = document.getElementById(`blow-effect-${candleId}`);
      
      candle.style.height = (45 + Math.random() * 10) + 'px';
      
      candle.addEventListener('mouseenter', function() {
        if (flame.style.opacity !== '0') {
          blowOutCandle(candleId);
          blownCandles++;
          
          playSound(blowSound);
          createSmallConfetti(candle);
          
          if (blownCandles === candles.length) {
            setTimeout(() => {
              createConfetti();
              lightButton.textContent = 'Light Candles Again';
              allCandlesLit = false;
              
              playSound(celebrationSound);
            }, 500);
          }
        }
      });
    });
    
    function blowOutCandle(candleId) {
      const flame = document.getElementById(`flame-${candleId}`);
      const blowEffect = document.getElementById(`blow-effect-${candleId}`);
      
      blowEffect.style.animation = 'blow 0.8s forwards';
      flame.style.animation = 'none';
      flame.style.opacity = '0';
      
      setTimeout(() => {
        blowEffect.style.animation = 'none';
      }, 800);
    }
    
    function createSmallConfetti(candle) {
      const rect = candle.getBoundingClientRect();
      
      for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = (rect.left + Math.random() * 20) + 'px';
        confetti.style.top = (rect.top + Math.random() * 20) + 'px';
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = (Math.random() * 8 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `confetti-fall ${Math.random() * 2 + 1}s linear forwards`;
        confetti.style.opacity = '1';
        container.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 3000);
      }
    }
    
    function createConfetti() {
      for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = -10 + 'px';
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.opacity = '1';
        container.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }
    }
    
    lightButton.addEventListener('click', function() {
      playSound(lightSound);
      candles.forEach((candle, index) => {
        const candleId = index + 1;
        const flame = document.getElementById(`flame-${candleId}`);
        
        flame.style.animation = 'flicker 0.5s infinite alternate';
        flame.style.opacity = '1';
      });
      
      lightButton.textContent = 'Light Candles Again';
      allCandlesLit = true;
      blownCandles = 0;
    });
  });