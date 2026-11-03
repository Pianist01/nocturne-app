export function displayVideo(id) {
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video-overlay');

  const closeVideoBtn = document.createElement('button');
  closeVideoBtn.classList.add('exit-vid-btn');
  closeVideoBtn.textContent = 'X';

  const videoIframe = document.createElement('iframe');
  videoIframe.classList.add('video');
  if(episodeList[id].link === '') {
    throw new Error('Video does not exist or is not yet available');
  }
  videoIframe.src = episodeList[id].link;
  videoIframe.setAttribute('fullScreen', 'autoplay: fullscreen');

  videoContainer.append(videoIframe, closeVideoBtn);
  main.append(videoContainer);
}

const main = document.querySelector('main');


export let episodeList = [
  {
    id: 1,
    link: ''
  },
  {
    id: 2,
    link: 'https://customer-rfs47g2sesk68o5o.cloudflarestream.com/2581d36e34b6ad85ca6e7d9a24b917ca/iframe?poster=https%3A%2F%2Fcustomer-rfs47g2sesk68o5o.cloudflarestream.com%2F2581d36e34b6ad85ca6e7d9a24b917ca%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true'
  },
  {
    id: 3,
    link: 'https://customer-rfs47g2sesk68o5o.cloudflarestream.com/ba457fba1c434855d5a9671ac94b9263/iframe?poster=https%3A%2F%2Fcustomer-rfs47g2sesk68o5o.cloudflarestream.com%2Fba457fba1c434855d5a9671ac94b9263%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay = true'
  }
]