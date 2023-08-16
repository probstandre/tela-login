const indicators = document.querySelectorAll('.indicator');
const imagesContainer = document.querySelector('.carousel-images');
const imageWidth = imagesContainer.clientWidth;
let currentIndex = 0;

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

function updateCarousel() {
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}