import {accordian} from './accordian';

import '../styles/main.css';

function bindHandlers() {
    document.addEventListener('click', e => {
        accordian(e);
    }, false);
}

bindHandlers();
