let title = document.querySelector('#level-title');
let body = document.querySelector('body');
let green = document.getElementById('green');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');
var level = 1;
var arr1 = [];
var arr2 = [];
var buttons = [green, red, yellow, blue]
document.addEventListener('keypress', a);

function a(even) {
    if (even.key == 'a') {
        title.innerHTML = "Level " + level;

        generateButton();

    }
}

function generateButton() {
    if (level == 1) {
        setTimeout(function () {
            document.removeEventListener('keypress', a);
        }, 100);
    }
    let randInt = (Math.floor(Math.random() * 4));
    switch (randInt) {
        case 0:
            setTimeout(function () {
                green.classList.add('generate');
                makeSound(green.getAttribute('id'));
            }, 1000)
            setTimeout(function () {
                green.classList.remove('generate');
            }, 1100)
            break;
        case 1:
            setTimeout(function () {
                red.classList.add('generate');
                makeSound(red.getAttribute('id'));
            }, 1000);
            setTimeout(function () {
                red.classList.remove('generate');
            }, 1100)
            break;
        case 2:
            setTimeout(function () {
                yellow.classList.add('generate');
                makeSound(yellow.getAttribute('id'));
            }, 1000);
            setTimeout(function () {
                yellow.classList.remove('generate');
            }, 1100)

            break;
        case 3:
            setTimeout(function () {
                blue.classList.add('generate');
                makeSound(blue.getAttribute('id'));
            }, 1000);
            setTimeout(function () {
                blue.classList.remove('generate');
            }, 1100)
            break;
    }
    arr1.push(buttons[randInt].getAttribute('id'));
    level++;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        makeSound(event.target.getAttribute('id'));
        arr2.push(event.target.getAttribute('id'));
        event.target.classList.add('pressed');
        setTimeout(function () {
            event.target.classList.remove('pressed');
        }, 100);
        checkSolution(arr1.length - 1);

    })
}
function checkSolution(length) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[j] == arr2[j]) {
            if (j == length) {
                title.innerHTML = "Level " + level;
                arr2 = [];
                generateButton();
            }
        } else {
            gameOver();
            makeSound("qw");
        }
    }
}
function gameOver() {
    body.classList.add('game-over');
    setTimeout(function () {
        body.classList.remove('game-over');
    }, 100);
    title.innerHTML = "Game Over, Press A to Restart";
    arr1 = [];
    arr2 = [];
    level = 1;
    document.addEventListener('keypress', a);

}

function makeSound(btn) {
    switch (btn) {
        case 'green':
            var gr = new Audio('sounds/green.mp3');
            gr.play();
            break;
        case 'red':
            var re = new Audio('sounds/red.mp3');
            re.play();
            break;
        case 'yellow':
            var ye = new Audio('sounds/yellow.mp3');
            ye.play();
            break;
        case 'blue':
            var bl = new Audio('sounds/blue.mp3');
            bl.play();
            break;
        default:
            var ov = new Audio('sounds/wrong.mp3');
            ov.play();
    }

}
