export function accordian(e) {
    let target = e.target;

    if (target.classList.contains('accordian-slide')) {
        target = target.childNodes[0];
    }

    if (target.parentNode.classList.contains('accordian-slide') && !target.parentNode.classList.contains('open')) {
        const slides = document.querySelectorAll('.accordian-slide');
        Array.from(slides).forEach(slide => {
            slide.classList.remove('open')
        });
        setTimeout(() => target.parentNode.classList.add('open'));
    }
}
