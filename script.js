document.addEventListener('DOMContentLoaded', () => {
    // Subtle background color change on mouse move
    document.body.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const hueRotate = x * 10 - 5;
        const brightness = 100 + (y * 10 - 5);
        document.body.style.filter = `hue-rotate(${hueRotate}deg) brightness(${brightness}%)`;
    });

    // Reset on mouse leave
    document.body.addEventListener('mouseleave', () => {
        document.body.style.filter = 'none';
    });

    // Subtle lightning animation
    const lightning = document.querySelector('.lightning-bolt');
    setInterval(() => {
        lightning.style.opacity = Math.random() > 0.8 ? '0.8' : '0.4';
    }, 3000);
});
