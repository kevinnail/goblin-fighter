/* Imports */
import { getRandomItem } from './utils.js';
import { renderRobot } from './render-utils.js';

/* Get DOM Elements */
const userHP = document.getElementById('user-HP');
const userImg = document.getElementById('robot-me');
const currentMsg = document.getElementById('current-msg');
const scoreSpan = document.getElementById('score');
const score = 0;
const robotSection = document.getElementById('robot-section');

/* State */
let playerObj = {
    HP: 10,
};
let message = '';
let robots = [
    { name: 'fox', HP: 8 },
    { name: 'snake', HP: 5 },
    { name: 'bird', HP: 5 },
];

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

function displayScoreBoard() {
    scoreSpan.innerHTML = score;
}

function displayRobots() {
    robotSection.innerHTML = '';
    console.log(robots.length);
    for (const robot of robots) {
        const robotEl = renderRobot(robot);
        console.log(robot.name);
        robotEl.addEventListener('click', () => {
            // do attack/ damage stuff
        });
    }
    // displayRobots();
}

//
//
// (don't forget to call any display functions you want to run on page load!)

displayUserHP();
displayCurrentMsg();
displayScoreBoard();
displayRobots();
