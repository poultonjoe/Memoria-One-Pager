import './picturefill.min.js';
import debounce from 'lodash.debounce';
import {resizeVideo, videoSlideshow} from './video';
import {accordian} from './accordian';
import {carousel, appendImages} from './carousel';
import {toggleMenu, scrollTo} from './menu';

import '../styles/main.css';

function bindHandlers() {
    document.addEventListener('click', e => {
        accordian(e);
        carousel(e);
        toggleMenu(e);
        scrollTo(e);
    }, false);

    let timeout = null;

    window.addEventListener('resize', debounce(resizeVideo, 150), false);
}

function init() {
    appendImages();
    bindHandlers();
    resizeVideo();
    videoSlideshow();
}

init();
