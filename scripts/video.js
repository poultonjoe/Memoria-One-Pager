export function resizeVideo() {
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector('.site-header').clientHeight;
    const videoSection = document.querySelector('.section-video');
    const video = document.querySelector('.video-background');

    videoSection.style.height = `${windowHeight - headerHeight}px`;
    
    if (video.clientWidth < videoSection.clientWidth) {
        video.style.height = 'auto';
        video.style.width = '100%';
    } else if (video.clientHeight < videoSection.clientHeight) {
        video.style.height = '100%';
        video.style.width = 'auto';
    }
}

export function videoSlideshow() {
    const slides = document.querySelectorAll('.video-slide');
    let activeIndex = 0;

    const interval = setInterval(() => {
        Array.from(slides).forEach((slide, i) => {
            slide.classList.remove('active');
        });

        if (activeIndex < slides.length - 1) {
            activeIndex++;
        } else {
            activeIndex = 0;
        }

        slides[activeIndex].classList.add('active');
    }, 15000);
}
