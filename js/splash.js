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
        body.style.overflow = '';
    }, 3000);  
    
    setTimeout(() => {
        splashContainer.remove();
    }, 4000)
}

const main = document.querySelector('main');
const body = document.querySelector('body');