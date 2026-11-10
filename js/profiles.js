export function displayProfileSection() {
    let active = false;
    const profileBtn = document.querySelector('.profile');
    const homeBtn = document.querySelector('.home');
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        profileSection();
        active = true;
    })
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(active === true) {
            closeContainer();
        } else if(active === false) {
            return;
        }
        active = false;
    })
}

 function profileSection() {
    const body = document.querySelector('body');
    const profileSectionContainer = document.createElement('div');
    profileSectionContainer.classList.add('profile-section-container');

    function openContainer() {
        profileSectionContainer.style.width = '100%';
        emptyProfileImage.classList.add('active');
        emptyProfileTitle.classList.add('active');
        createProfileText.classList.add('active');
        createProfileBtn.classList.add('active');
    }
    requestAnimationFrame(openContainer);

    const emptyProfileImage = document.createElement('img');
    emptyProfileImage.classList.add('empty-prof-image');
    emptyProfileImage.src = 'img/defaultProfileIcon.png';

    const emptyProfileTitle = document.createElement('h2');
    emptyProfileTitle.classList.add('empty-prof-title');
    emptyProfileTitle.textContent = 'Welcome to Nocturne!';

    const createProfileText = document.createElement('p');
    createProfileText.classList.add('create-prof-text');
    createProfileText.textContent = 'Create your profile and share your thoughts on every episode!';

    const createProfileBtn = document.createElement('button');
    createProfileBtn.classList.add('create-prof-btn');
    createProfileBtn.textContent = 'Create Profile';

    createProfileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        createProfileForm();
    })

    profileSectionContainer.append(emptyProfileImage, emptyProfileTitle, createProfileText, createProfileBtn);
    body.append(profileSectionContainer);
}

function closeContainer() {
    const profileSectionContainer = document.querySelector('.profile-section-container');
    const profileSectionImage = document.querySelector('.empty-prof-image');
    const profileSectionTitle = document.querySelector('.empty-prof-title');
    const profileSectionText = document.querySelector('.create-prof-text');
    const profileSectionBtn = document.querySelector('.create-prof-btn');

    function animateCloseContainer() {
        profileSectionContainer.style.width = '0';
        profileSectionImage.classList.remove('active');
        profileSectionTitle.classList.remove('active');
        profileSectionText.classList.remove('active');
        profileSectionBtn.classList.remove('active');
    }
    requestAnimationFrame(animateCloseContainer);
    
    setTimeout(() => {
        profileSectionContainer.remove();
    }, 500);
}

// PROFILE FORM 



function createProfileForm() {
    const profileSectionContainer = document.querySelector('.profile-section-container');
    const profileFormContainer = document.createElement('div');
    profileFormContainer.classList.add('prof-form-container');

    function openForm() {
        profileFormContainer.style.transform = 'scaleY(1)';
    }
    requestAnimationFrame(openForm);

    const profileForm = document.createElement('form');
    profileForm.id = 'user-form';

    const exitFormBtn = document.createElement('button');
    exitFormBtn.classList.add('exit-form-btn');
    exitFormBtn.type = 'button';
    exitFormBtn.textContent = 'X';

    function closeForm() {
        profileFormContainer.style.transform = 'scaleY(0)';
    }

    exitFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        requestAnimationFrame(closeForm);
    })

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('user-img-container');

    const userImage = document.createElement('img');
    userImage.classList.add('image-preview');
    userImage.src = 'icons/profile.svg';
    userImage.alt = 'Default Profile Picture';

    const changeImageLabel = document.createElement('label');
    changeImageLabel.htmlFor = 'image-upload';
    changeImageLabel.textContent = 'Upload an Image';

    const changeImageInput = document.createElement('input');
    changeImageInput.type = 'file';
    changeImageInput.id = 'image-input';
    changeImageInput.name = 'image';
    changeImageInput.accept = 'image/*';

    const userNameLabel = document.createElement('label');
    userNameLabel.classList.add('user-name-label');
    userNameLabel.htmlFor = 'username';
    userNameLabel.textContent = 'Username';

    const userNameInput = document.createElement('input');
    userNameInput.type = 'text';
    userNameInput.id = 'username';
    userNameInput.name = 'username';
    userNameInput.required = true;
    userNameInput.placeholder = 'Enter your Username';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Create Profile';

    imageContainer.append(userImage, changeImageLabel, changeImageInput);
    profileForm.append(exitFormBtn, imageContainer, userNameLabel, userNameInput, submitBtn);
    profileFormContainer.append(profileForm);
    profileSectionContainer.append(profileFormContainer);
}