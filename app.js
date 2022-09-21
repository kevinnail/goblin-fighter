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
const addRobotForm = document.getElementById('add-robot-form');
const removeDeadRobots = document.getElementById('remove-robot-button');

/* State */
let playerObj = {
    HP: 50,
};
let message = '';
let robots = [
    { name: 'fox', HP: 10, type: 'fox' },
    { name: 'snake', HP: 5, type: 'snake' },
    { name: 'elephant', HP: 10, type: 'elephant' },
];

let score = 0;
let hpDamage = 0;
let hpDamage2 = 0;

const whichRobot = ['bird', 'snake', 'fox', 'cheetah', 'elephant'];
const robotOptions = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

// const bird = { type: 'bird', HP: 5 };
// const snake = { type: 'snake', HP: 5 };
// const fox = { type: 'fox', HP: 10 };
// const cheetah = { type: 'cheetah', HP: 12 };
// const elephant = { type: 'elephant', HP: 15 };

/* Events */

addRobotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addRobotForm);
    const robot = {
        name: formData.get('name'),
    };

    const robotNumber = getRandomNumber(4);
    const typeOfRobot = whichRobot[robotNumber];

    robot.type = typeOfRobot;

    switch (robot.type) {
        case 'bird':
            robot.HP = 5;
            break;
        case 'snake':
            robot.HP = 5;
            break;
        case 'fox':
            robot.HP = 10;
            break;
        case 'cheetah':
            robot.HP = 12;
            break;
        case 'elephant':
            robot.HP = 15;
            break;
    }

    robots.push(robot);
    addRobotForm.reset();

    message = robot.name + ' the ' + robot.type + ' was added to the fight!';

    displayRobots();
    displayCurrentMsg();
    message = '';
});

removeDeadRobots.addEventListener('click', () => {
    const liveRobots = [];
    for (const robot of robots) {
        // > if the robot is not dead, push
        // them into the liveRobots array
        if (robot.HP > 1) {
            liveRobots.push(robot);
        }
    }
    robots = liveRobots;
    displayRobots();
});

/* Display Functions */
function displayUserHP() {
    userHP.textContent = playerObj.HP;

    if (playerObj.HP > 0) {
        userImg.src = '/assets/robots/robot-me.png';
    } else {
        playerObj.HP = 0;
        userImg.src = '/assets/other/dead-hero.png';
        userHpDiv.classList.add('dead');
        // message = 'You died! You have lost to the evil animal robots!';
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

            if (robot.HP <= 0) {
                message = 'Already dead, fight another robot!';
            } else if (playerObj.HP > 0 && robot.HP > 0) {
                hpDamage = robot.HP;
                robot.HP -= getRandomNumber(5);
                // message +=
                //     'You inflict ' +
                //     '<span class="message-span">' +
                //     (hpDamage - robot.HP) +
                //     '</span>' +
                //     ' HP, ';
                // console.log('robot: ' + robot.HP + ' and was hit with ' + (robot.HP - hpDamage));

                hpDamage2 = playerObj.HP;
                playerObj.HP -= getRandomNumber(3);
                // message +=
                //     'Robot inflicts ' +
                //     '<span class="message-span">' +
                //     (hpDamage - playerObj.HP + '</span>' + ' HP ');
                // displayCurrentMsg();
                // console.log(
                //     'player: ' + playerObj.HP + ' and was hit with ' + (playerObj.HP - hpDamage2)
                // );

                if (playerObj.HP > 0 && robot.HP > 0) {
                    message +=
                        'You inflict ' +
                        '<span class="message-span">' +
                        (hpDamage - robot.HP) +
                        '</span>' +
                        ' HP, ';
                    message +=
                        'Robot inflicts ' +
                        '<span class="message-span">' +
                        (hpDamage2 - playerObj.HP + '</span>' + ' HP ');
                    // displayCurrentMsg();
                } else if (robot.HP <= 0 && playerObj.HP > 0) {
                    if (robot.name === robot.type) {
                        message = `You killed the <span class="message-span">  ${robot.type} </span>!!`;
                    } else {
                        message = `You killed <span class="message-span">${robot.name} the ${robot.type} </span>!!`;
                    }
                    score++;
                    displayScoreBoard();
                    // displayCurrentMsg();
                } else if (robot.HP <= 0 && playerObj.HP <= 0) {
                    message = 'You both have died! Game over';
                    // displayCurrentMsg;
                } else if (robot.HP > 0 && playerObj.HP <= 0) {
                    message = 'You have died and lost to the evil animal robots. Game over';
                    // displayCurrentMsg();
                }

                displayCurrentMsg();
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
