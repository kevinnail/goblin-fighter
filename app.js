/* Imports */
import { getRandomItem, getRandomNumber } from './utils.js';
import { renderRobot } from './render-utils.js';

/* Get DOM Elements */
const userHP = document.getElementById('user-HP');
const userHpDiv = document.getElementById('user-HP-div');
const userImg = document.getElementById('robot-me');
const currentMsg = document.getElementById('current-msg');
const scoreSpan = document.getElementById('score');

const robotSection = document.getElementById('robot-section');

/* State */
let playerObj = {
    HP: 50,
};
let message = '';
let robots = [
    { name: 'fox', HP: 10 },
    { name: 'snake', HP: 5 },
    { name: 'elephant', HP: 10 },
];

let score = 0;
let hpDamage = 0;

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
        playerObj.HP = 0;
        userImg.src = '/assets/other/dead-hero.png';
        userHpDiv.classList.add('dead');
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
            // switch statement? need to differentiate between robots' varying HP

            // if (robot.HP > 0) {
            // hpDamage = playerObj.HP;
            // playerObj.HP -= getRandomNumber(3);

            // message =
            //     'Robot inflicts ' +
            //     '<span style="font-size:1.5em;">' +
            //     (hpDamage - playerObj.HP + '</span>' + ' HP, ');
            // } else {
            //     // message = `You have killed the ${robot.name}!!!`;
            // }

            if (playerObj.HP > 0 && robot.HP > 0) {
                hpDamage = robot.HP;
                robot.HP -= getRandomNumber(5);
                message +=
                    'You inflict ' +
                    '<span style="font-size:1.5em;">' +
                    (hpDamage - robot.HP) +
                    '</span>' +
                    ' HP, ';

                hpDamage = playerObj.HP;
                playerObj.HP -= getRandomNumber(3);
                message +=
                    'Robot inflicts ' +
                    '<span style="font-size:1.5em;">' +
                    (hpDamage - playerObj.HP + '</span>' + ' HP ');
                displayCurrentMsg();

                if (robot.HP <= 0) {
                    message = `You killed the ${robot.name}!!`;
                    score++;
                    displayScoreBoard();
                    displayCurrentMsg();
                }
            }

            displayRobots();
            displayUserHP();
            // displayCurrentMsg();
            message = '';
            // message = `You have killed the ${robot.name}!`;
        });

        if (robot.HP <= 0) {
            robot.HP = 0;

            displayCurrentMsg();
        }

        if (playerObj.HP <= 0) {
            playerObj.HP = 0;
            displayUserHP();
        }
        robotSection.append(robotEl);
    }
    displayScoreBoard();
}

//
//
// (don't forget to call any display functions you want to run on page load!)

displayUserHP();
displayCurrentMsg();
displayScoreBoard();
displayRobots();
