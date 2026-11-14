import {    writeFile   } from 'node:fs/promises';
import {    readFile    } from 'node:fs/promises';

async function manageFile() {
    try {
        await writeFile('nocturne.txt', 'Welcome to the Nocturne backend!');

        const fileData = await readFile('nocturne.txt', 'utf-8');

        console.log(fileData); 
    } catch(error) {
        console.error('File operation failed:', error.message);
    }
}  

manageFile();