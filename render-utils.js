export function renderRobot(robot) {
    const robotDisplay = document.createElement('div');
    robotDisplay.classList.add('robot-display');

    const robotImg = document.createElement('img');
    robotImg.classList.add('robot-img');
    robotImg.src = '/assets/robots/robot-' + robot.name + '.png';

    const robotDiv = document.createElement('div');
    robotDiv.classList.add('robots');

    const hEl = document.createElement('h3');
    hEl.textContent = 'HP';

    const pEl = document.createElement('p');
    pEl.textContent = robot.HP;

    robotDiv.append(hEl, pEl);
    robotDisplay.append(robotImg, robotDiv);
    return robotDisplay;
}
