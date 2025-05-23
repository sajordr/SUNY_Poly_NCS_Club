document.addEventListener('DOMContentLoaded', function() {
    // Canvas setup
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Characters to display (just binary for cybersecurity theme)
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array for drop positions
    const drops = [];
    
    // Initialize drops at random positions
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    // Dark blue shades for the Matrix effect
    const blueShades = [
        'rgba(10, 34, 64, 0.3)',  // very dark blue, low opacity
        'rgba(25, 60, 120, 0.7)',  // medium dark blue
        'rgba(41, 98, 195, 0.8)',  // brighter blue
        'rgba(100, 181, 246, 0.9)' // light blue, high opacity
    ];
    
    // Drawing the characters
    function draw() {
        // Black background with some transparency to create trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < drops.length; i++) {
            // Get random character from chars
            const text = chars[Math.floor(Math.random() * chars.length)];
            
            // Get random blue shade
            const shade = blueShades[Math.floor(Math.random() * blueShades.length)];
            ctx.fillStyle = shade;
            
            // Draw the character
            ctx.font = fontSize + 'px monospace';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Move the drop down
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // Run the animation
    setInterval(draw, 35);
});
