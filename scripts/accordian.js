export function accordian(e) {
    if (e.target.parentNode.classList.contains('accordian-slide') && !e.target.parentNode.classList.contains('open')) {
        const slides = document.querySelectorAll('.accordian-slide');
        Array.from(slides).forEach(slide => {
            console.log(slide);
            slide.classList.remove('open')
        });
        setTimeout(() => e.target.parentNode.classList.add('open'));
    }
}
