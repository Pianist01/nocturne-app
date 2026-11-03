export function splashWindow() {
    window.addEventListener('load', () => {
        const splashContainer = document.createElement('div');
    splashContainer.classList.add('splash-container');

    const splashLogo = document.createElement('img');
    splashLogo.classList.add('splash-logo');
    splashLogo.src = 'img/nocturneLogoVertical.png';

    splashContainer.append(splashLogo);
    main.append(splashContainer);
    body.style.overflow = 'hidden';

    setTimeout(() => {
        splashContainer.classList.add('hide');
        body.style.overflow = '';
    }, 3000);
    })
}

const main = document.querySelector('main');
const body = document.querySelector('body');