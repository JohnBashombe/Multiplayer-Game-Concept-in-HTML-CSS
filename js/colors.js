
let purpleArray = ['#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'];

let blueArray = ['#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'];

let greenArray = ['#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'];

let blue = document.getElementById('blue-side');
let purple = document.getElementById('purple-side');
let green = document.getElementById('green-side');

setInterval(() => {

    let randomblue = Math.round(Math.random() * (blueArray.length - 1));
    let randompurple = Math.round(Math.random() * (purpleArray.length - 1));
    let randomgreen = Math.round(Math.random() * (greenArray.length - 1));

    blue.style.backgroundColor = blueArray[randomblue];
    purple.style.backgroundColor = purpleArray[randompurple];
    green.style.backgroundColor = greenArray[randomgreen];

    // console.log('Blue ' + blueArray[randomblue] + ' Purple ' + purpleArray[randompurple] + ' Green ' + greenArray[randomgreen]);


}, 2000);