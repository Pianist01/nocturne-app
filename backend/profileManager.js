import {writeFile, readFile} from 'node:fs/promises';

async function manageProfile() {
    const profile = {
        username: 'Abel',
        profileImage: 'abel.png',
        isActive: true,
        favoriteEpisodes: [1, 3, 5]
    }

    try {
        const toString = JSON.stringify(profile);
        const intoFile = await writeFile('profile.json', toString);
        const checkFile = await readFile('profile.json', 'utf-8');
        const parseFile = JSON.parse(checkFile);

        console.log(`Username: ${parseFile.username}, Favorite Episodes: ${parseFile.favoriteEpisodes}`);
    } catch(error) {
        console.error('Error: ', error.message);
    }

}

manageProfile();