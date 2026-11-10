export function profileSection() {
    const body = document.querySelector('body');
    const profileSectionContainer = document.createElement('div');
    profileSectionContainer.classList.add('profile-section-container');

    const emptyProfileImage = document.createElement('img');
    emptyProfileImage.classList.add('empty-prof-image');
    emptyProfileImage.src = 'img/defaultProfileIcon.png';

    const createProfileText = document.createElement('p');
    createProfileText.classList.add('create-prof-text');
    createProfileText.textContent = 'Create a profile to join the conversation and make Nocturne your own!';

    const createProfileBtn = document.createElement('button');
    createProfileBtn.classList.add('create-prof-btn');
    createProfileBtn.textContent = 'Create Profile';

    profileSectionContainer.append(emptyProfileImage, createProfileText, createProfileBtn);
    body.append(profileSectionContainer);
}