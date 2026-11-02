export function watchNow() {
  watchNowBtn.addEventListener('click', (e) => {
    displayEpisodes();
    console.log('clicked');
  });
}

const watchNowBtn = document.querySelector('.enter-show-btn');
const main = document.querySelector('main');
let i = 0;

function displayEpisodes() {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('episode-content-container');

  const exitEpisodeBtn = document.createElement('button');
  exitEpisodeBtn.classList.add('exit-episode-btn');
  exitEpisodeBtn.textContent = 'X';
  const episodeContainerImage = document.createElement('img');
  episodeContainerImage.classList.add('episode-image');
  episodeContainerImage.src = '/img/abelHorizontal.png';

  const productionType = document.createElement('div');
  productionType.classList.add('production-type');
  const productionTypeText = document.createElement('p');
  productionTypeText.textContent = 'Nocturne Original';

  const productionGenre = document.createElement('p');
  productionGenre.textContent = `Drama \u00B7 Action`;

  const showName = document.createElement('h1');
  showName.textContent = 'ABEL';

  const showDescription = document.createElement('p');
  showDescription.classList.add('show-description');
  showDescription.textContent = 'One man threatens the entire world, and only one man can stop him. How far will he go for the woman he loves?';

  const watchBtn = document.createElement('button');
  watchBtn.classList.add('watch-show-btn');
  watchBtn.textContent = 'Start Watching';

  productionType.append(productionTypeText, productionGenre, showName, showDescription);

  const episodeListContainer = document.createElement('div');
  episodeListContainer.classList.add('episode-list-container');

  const episodeListTitle = document.createElement('h2');
  episodeListTitle.classList.add('episodes-title');
  episodeListTitle.textContent = 'Episodes';

  const episodeList = document.createElement('ul');
  episodeList.classList.add('episode-UL');

  episodeInformation.forEach((episode) => {
    const episodeListItem = document.createElement('li');
    episodeListItem.classList.add(`episode-${episode.id}`);

    const episodeImage = document.createElement('img');
    episodeImage.classList.add(`episode-image-${episode.id}`);
    episodeImage.src = episode.image;

    episodeListItem.textContent = episode.title;

    const episodeDescription = document.createElement('p');
    episodeDescription.textContent = episode.description;

    episodeListItem.append(episodeImage, episodeDescription);
    episodeList.append(episodeListItem);
  })

  contentContainer.append(exitEpisodeBtn, episodeContainerImage, productionType, episodeListContainer, episodeListTitle, episodeList);

  function openContainer() {
    contentContainer.style.width = '100vw';
  }
  requestAnimationFrame(openContainer);

  main.append(contentContainer);
}

let episodeImages = [
  '/img/abelKioka.png',
  '/img/angryYogi.png',
  '/img/abelScreaming.png'
];

let episodeNames = [
  `1. Hola Me Llamo Freddy`,
  `2. YOGGGIIIIIII`,
  `3. I AM NANDO!`,
  `4. Not Alone`,
  `5. Did You Do This NANDO?!!`,
  `6. Doubt`,
  `7. Endgame Part 1`,
  `8. Endgame Part 2`
];

const episodeInformation = [
  {
    id: 1,
    image: '/img/abelKioka.png',
    title: `1. Hola Me Llamo Freddy`,
    description: 'Abel loves his tlacuachita but does Kioka feel the same?'
  },
  {
    id: 2,
    image: '/img/angryYogi.png',
    title: `2. YOGGGIIIIIII`,
    description: `Kioka knows that it is Abel's turn, but does Yogi know this?`
  },
  {
    id: 3,
    title: `3. I AM NANDO!`,
    image: '/img/abelScreaming.png',
    description: 'Abel is getting desparate to be inside that Pussy, and Nando is not going to make things any better.'
  },
  {
    id: 4,
    image: '/img/lockedEpisode.png',
    title: `4. Not Alone`,
    description: 'Things are not looking good, but maybe there are others who can help.'
  },
  {
    id: 5,
    image: '/img/lockedEpisode.png',
    title: `5. DID YOU DO THIS NANDO??!!!`,
    description: 'Abel needs to get his pussy, so it is time to face Nando and get Kioka, but some people can not believe he would do this.'
  },
  {
    id: 6,
    image: '/img/lockedEpisode.png',
    title: `6. Doubt`,
    description: 'What now?'
  },
  {
    id: 7,
    image: '/img/lockedEpisode.png',
    title: `7. Endgame Part 1`,
    description: 'This it. Nando can not be allowed to win.'
  },
  {
    id: 8,
    image: '/img/lockedEpisode.png',
    title: `8. Endgame Part 2`,
    description: 'It has all led to this. No sacrifice, no victory.'
  }
]