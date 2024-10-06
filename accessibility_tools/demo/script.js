let currentFontSize = 16; // Default font size in pixels

// Show/Hide Accessibility Widget
const toolsIcon = document.getElementById('toolsIcon');
const accessibilityWidget = document.getElementById('accessibilityWidget');

toolsIcon.addEventListener('click', () => {
    const isHidden = accessibilityWidget.style.display === 'none' || accessibilityWidget.style.display === '';
    accessibilityWidget.style.display = isHidden ? 'block' : 'none';
});

// Zoom In functionality
document.getElementById('zoomInButton').addEventListener('click', () => {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + 'px';
});

// Zoom Out functionality
document.getElementById('zoomOutButton').addEventListener('click', () => {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + 'px';
    }
});

// Cursor change functionality
document.getElementById('cursorButton').addEventListener('click', () => {
    document.body.classList.toggle('large-cursor');
});

// Grayscale toggle functionality
document.getElementById('grayscaleButton').addEventListener('click', () => {
    const slider = document.getElementById('grayscaleSlider');
    slider.style.display = slider.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('grayscaleSlider').addEventListener('input', (event) => {
    const value = event.target.value;
    document.body.style.filter = `grayscale(${value}%)`;
});

// Brightness adjustment functionality
document.getElementById('brightnessButton').addEventListener('click', () => {
    const slider = document.getElementById('brightnessSlider');
    slider.style.display = slider.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('brightnessSlider').addEventListener('input', (event) => {
    const value = event.target.value;
    document.body.style.filter = `brightness(${value}%)`;
});

// Toggle Alt Text functionality
document.getElementById('imageButton').addEventListener('click', () => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        if (img.src) {
            img.alt = img.alt; // Keep the alt text
            img.src = ''; // Hide the image
        } else {
            img.src = 'download.jpeg'; // Restore the image (use actual image URL here)
        }
    });
});
