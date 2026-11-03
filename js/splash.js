export function splashWindow() {
    window.addEventListener('load', () => {
        splash();
    })
}

function splash() {
    const splashContainer = document.querySelector('.splash-container');

    const splashLogo = document.querySelector('.splash-logo');

    body.style.overflow = 'hidden';

    setTimeout(() => {
        splashContainer.classList.add('hide');
        splashContainer.remove();
        body.style.overflow = '';
    }, 3000);  
}

const main = document.querySelector('main');
const body = document.querySelector('body');