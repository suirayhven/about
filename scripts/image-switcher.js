document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#hero-image img');
    const svgs = document.querySelectorAll('.image-selector svg');
    let index = 0; // Initial index for image selection
    let intervalId; // Variable to hold the interval ID

    svgs.forEach((svg, idx) => {
        svg.addEventListener('click', () => {
            // Remove 'active' class from all SVGs
            svgs.forEach(s => s.classList.remove('active'));
            // Add 'active' class to the clicked SVG
            svg.classList.add('active');

            // Hide all images
            images.forEach(img => img.classList.remove('selected'));
            // Show the corresponding image
            images[idx].classList.add('selected');
            index = idx; // Update index
        });
    });

    // Function to switch images
    function switchImage() {
        // Remove 'active' class from all SVGs
        svgs.forEach(s => s.classList.remove('active'));
        // Add 'active' class to the corresponding SVG
        svgs[index].classList.add('active');

        // Hide all images
        images.forEach(img => img.classList.remove('selected'));
        // Show the corresponding image
        images[index].classList.add('selected');

        // Increment index for the next image
        index = (index + 1) % images.length;
    }

    // Start the interval initially
    switchImage(); // Switch image once immediately
    startInterval(); // Start the interval after the first image switch

    // Function to start the interval
    function startInterval() {
        intervalId = setInterval(switchImage, 5000);
    }

    // Add mouseenter and mouseleave event listeners to #hero-image
    const heroImage = document.getElementById('hero-image');
    heroImage.addEventListener('mouseenter', function () {
        // Stop the interval when mouse enters
        clearInterval(intervalId);
    });

    heroImage.addEventListener('mouseleave', function () {
        // Restart the interval when mouse leaves
        startInterval();
    });
});
