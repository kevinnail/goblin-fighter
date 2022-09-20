/* Imports */
import { getRandomItem } from './utils.js';

/* Get DOM Elements */
const userHP = document.getElementById('user-HP');
const userImg = document.getElementById('robot-me');

/* State */
let playerObj = {
    HP: 10,
};
/* Events */

/* Display Functions */
function displayUserHP() {
    userHP.textContent = playerObj.HP;

    if (!playerObj.HP < 1) {
        userImg.src = '/assets/robots/robot-me.png';
    } else {
        userImg.src = '/assets/other/dead-hero.png';
    }
}
// (don't forget to call any display functions you want to run on page load!)

displayUserHP();
