import {  watchNow  } from './episodes.js';
import {    splashWindow   } from './splash.js';

console.log(navigator.serviceWorker); 

splashWindow();
watchNow();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then((registration) => {
            console.log('Service worker registered', registration);
        })
        .catch((error) => {
            console.log('Service worker registration failed:', error);
        });
}