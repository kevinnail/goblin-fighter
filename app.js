/* Imports */
import { getRandomItem, getRandomNumber } from './utils.js';
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
    { name: 'fox', HP: 10 },
    { name: 'snake', HP: 5 },
    { name: 'elephant', HP: 10 },
];

// const gameState = 'start';

// let robotHP = {};

// const whichRobot = ['bird', 'snake', 'fox', 'cheetah', 'elephant'];
// const robotNumber = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

/* Events */

/* Display Functions */
function displayUserHP() {
    userHP.textContent = playerObj.HP;

    if (playerObj.HP > 0) {
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

    for (const robot of robots) {
        const robotEl = renderRobot(robot);
        robotEl.addEventListener('click', () => {
            if (robot.HP <= 0) {
                return;
            }
            // do attack/ damage stuff

            robot.HP -= getRandomNumber(3);
            playerObj.HP -= getRandomNumber(3);

            // switch statement? need to differentiate between robots' varying HP

            displayRobots();
            displayUserHP();
            displayCurrentMsg();
        });
        robotSection.append(robotEl);
    }
}

//
//
// (don't forget to call any display functions you want to run on page load!)

displayUserHP();
displayCurrentMsg();
displayScoreBoard();
displayRobots();
