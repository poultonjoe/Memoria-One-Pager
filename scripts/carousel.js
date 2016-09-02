export function carousel(e) {
    if (e.target.classList.contains('carousel-navigation')) {
        e.preventDefault();

        const arrow = e.target;
        const slides = document.querySelectorAll('.carousel-slide');
        let activeIndex;
        
        Array.from(slides).forEach((slide, i) => {
            if (slide.classList.contains('active')) {
                activeIndex = i;
                slide.classList.remove('active');

                // setTimeout(() => {
                //     const previous = slide.querySelectorAll('.carousel-image-wrap-previous');
                //     const next = slide.querySelectorAll('.carousel-image-wrap-next');
                //     slide.removeChild(previous);
                //     slide.removeChild(next);
                // }, 1000);
            }
        });

        if (arrow.classList.contains('carousel-navigation-next')) {
            if (activeIndex < slides.length - 1) {
                activeIndex++;
            } else {
                activeIndex = 0;
            }
        } else {
            if (activeIndex > 0) {
                activeIndex--;
            } else {
                activeIndex = slides.length - 1;
            }
        }

        slides[activeIndex].classList.add('active');
    }
}

export function appendImages() {
    const slides = document.querySelectorAll('.carousel-slide');

    Array.from(slides).forEach((slide, activeIndex) => {
        const previousIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;

        const previousSlide = slides[previousIndex].querySelector('.carousel-image-wrap').cloneNode(true);
        const nextSlide = slides[nextIndex].querySelector('.carousel-image-wrap').cloneNode(true);

        previousSlide.classList.add('carousel-image-wrap-previous');
        nextSlide.classList.add('carousel-image-wrap-next');

        slide.appendChild(previousSlide);
        slide.appendChild(nextSlide);
    });
}
