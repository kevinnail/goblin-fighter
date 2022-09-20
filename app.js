/* Imports */
import { getRandomItem } from './utils.js';

/* Get DOM Elements */
const userHP = document.getElementById('user-HP');
const userImg = document.getElementById('robot-me');
const currentMsg = document.getElementById('current-msg');
/* State */
let playerObj = {
    HP: 10,
};
let message = '';
/* Events */

/* Display Functions */
function displayUserHP() {
    userHP.textContent = playerObj.HP;

    if (!playerObj.HP < 1) {
        userImg.src = '/assets/robots/robot-me.png';
    } else {
        userImg.src = '/assets/other/dead-hero.png';
        message = 'You died! You have lost to the evil animal robots!';
    }
}

function displayCurrentMsg() {
    currentMsg.innerHTML = message;
}
// (don't forget to call any display functions you want to run on page load!)

displayUserHP();
displayCurrentMsg();
