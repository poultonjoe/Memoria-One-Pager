export function toggleMenu(e) {    
    if (e.target.classList.contains('menu-button') || e.target.parentNode.classList.contains('menu-button')) {
        e.preventDefault();
        const html = document.documentElement;
        const menuButton = document.querySelector('.menu-button');

        html.classList.toggle('menu-visible');
    }
}

export function scrollTo(e) {
    if (e.target.classList.contains('site-navigation-link')) {
        e.preventDefault();
        const anchor = document.querySelector(e.target.href.substr(e.target.href.lastIndexOf('/')+1, e.target.href.length-1));
        console.log(anchor);
        animate(document.body, 'scrollTop', '', 0, anchor.offsetTop, 500, true);
    }
}

function animate(elem,style,unit,from,to,time,prop) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            if (prop) {
                elem[style] = (from+step*(to-from))+unit;
            } else {
                elem.style[style] = (from+step*(to-from))+unit;
            }
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}
