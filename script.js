document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[placeholder="Search for restaurant, cuisine or a dish"]');

    // Animate search input on focus
    searchInput.addEventListener('focus', () => {
        searchInput.style.border = '2px solid #ffcccb'; // Light red border on focus
        searchInput.style.transition = 'border 0.3s';
    });

    // Reset border when focus is lost
    searchInput.addEventListener('blur', () => {
        searchInput.style.border = 'none';
    });

    // Example animation for main text
    const mainText = document.querySelector('main p');
    mainText.style.opacity = 0;
    mainText.style.transform = 'translateY(20px)';
    setTimeout(() => {
        mainText.style.transition = 'opacity 0.5s, transform 0.5s';
        mainText.style.opacity = 1;
        mainText.style.transform = 'translateY(0)';
    }, 500);
});
