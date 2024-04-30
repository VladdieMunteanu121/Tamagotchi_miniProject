// alert("JS is linked")
// the console logs will only be present in the browser inspection console not in VS code!!!!!

// const tamagotchiName = prompt("Name your Tamagotchi :)")
// const nameUpdate = document.querySelector("h1");
// nameUpdate.innerHTML= `${tamagotchiName}'s Evolution`;

const hungerTracker = document.querySelector(".hungerTracker")
const boredomTracker = document.querySelector(".boredomTracker")
const sleepinessTracker = document.querySelector(".sleepinessTracker")


const eatButton = document.querySelector(".eat")
const sleepButton = document.querySelector(".sleep")
const playButton = document.querySelector(".play")
let otherLuffyActivities = 0;


//Tracking Bar Style Selectors

let newHungerWidth = 0.0;
let newBoredomWidth = 0.0;
let newSleepinessWidth = 0.0;

let hungerBarWidth = parseFloat(getComputedStyle(hungerTracker).width)
let boredomBarWidth = parseFloat(getComputedStyle(boredomTracker).width)
let sleepinessBarWidth = parseFloat(getComputedStyle(sleepinessTracker).width)

const hungerBarMaxWidth = 405;
const boredomBarMaxWidth = 405;
const sleepinessBarMaxWidth = 405;

let characterExternal = 0;

class TamagotchiAttributes {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.boredom = 0;
        this.sleepiness = 0;
    }

ageUpdate(){
    this.age++
}

hungerUpdate(){
    this.hunger = hungerBarWidth;
}

boredomUpdate(){
    this.boredom = boredomBarWidth;
}
sleepinessUpdate(){
    this.sleepiness = sleepinessBarWidth;

}
}

 eatButton.addEventListener("click", function(){
    characterExternal = 1;
    characterFunction("eat")

 })
 sleepButton.addEventListener("click", function(){
    characterExternal = 1;
    characterFunction("sleep")
 })
 playButton.addEventListener("click", function(){
    characterExternal = 1;
    characterFunction("play")
 })


let images = document.querySelectorAll('.luffyMoments img');
let currentImageIndex = 0;


setInterval(characterMetrics, 1000);
// setInterval(characterEvolution, 3000);

const ageCounter = document.getElementById("ageCounter")
let age = 0;
let newAge = 0;
let intervalId; // Declare intervalId here

setInterval (() => {
    if (age < 80 && boredomBarWidth < boredomBarMaxWidth && hungerBarWidth < hungerBarMaxWidth && boredomBarWidth < boredomBarMaxWidth) {
        age++;
        ageCounter.textContent = `${age}`;
        characterEvolution();
    } else {
        currentImageIndex = 8;
        images.forEach((image, index) => {
            if (index === currentImageIndex) {
                image.style.display = 'none';
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        disableButtons();
        clearInterval(intervalId);
    }
}, 1000);


function characterMetrics () {
    if(hungerBarWidth < hungerBarMaxWidth){
        newHungerWidth = hungerBarWidth + 5;
        hungerTracker.style.width = newHungerWidth + "px";
    }
    if(boredomBarWidth < boredomBarMaxWidth){
    newBoredomWidth = boredomBarWidth + 10;
    boredomTracker.style.width = newBoredomWidth + "px";
    }
    if(sleepinessBarWidth < sleepinessBarMaxWidth){
    newSleepinessWidth = sleepinessBarWidth + 10;
    sleepinessTracker.style.width = newSleepinessWidth + "px";
    }
    hungerBarWidth = newHungerWidth;
    boredomBarWidth = newBoredomWidth;
    sleepinessBarWidth = newSleepinessWidth
}
function characterEvolution () {
    if (age >= 5 && age % 15 === 0 && currentImageIndex < 4) {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex++;
        images[currentImageIndex].style.display = 'block';
        console.log(currentImageIndex);
    }
    enableButtons();
    
};

function characterFunction(action) {
    eatButton.disabled = true;
    sleepButton.disabled = true;
    playButton.disabled = true;

    let previousImageIndex = currentImageIndex;
    otherLuffyActivities = 1;

    if (action === "eat") {
        currentImageIndex = 5;
        newHungerWidth = hungerBarWidth - 30;
        newBoredomWidth = boredomBarWidth - 10;
    } 
    if (action === "sleep") {
        document.body.style.backgroundImage='url("https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif?cid=790b7611ahdxp0h2rh8ji1lql6joqlj87px0sh63ogur2i0e&ep=v1_gifs_search&rid=giphy.gif&ct=g")'
        currentImageIndex = 6;
        newSleepinessWidth = sleepinessBarWidth - 35;
        newBoredomWidth = boredomBarWidth - 20;
    }
    if (action === "play") {
        currentImageIndex = 7;
        newBoredomWidth = boredomBarWidth - 30;
        newHungerWidth = hungerBarWidth + 7;
    }

    hungerTracker.style.width = newHungerWidth + "px";
    boredomTracker.style.width = newBoredomWidth + "px";
    sleepinessTracker.style.width = newSleepinessWidth + "px";

    hungerBarWidth = newHungerWidth;
    boredomBarWidth = newBoredomWidth;
    sleepinessBarWidth = newSleepinessWidth;


setTimeout(() => {
    currentImageIndex = previousImageIndex;
    images[currentImageIndex].style.display = 'none';
    images[currentImageIndex].style.display = 'block';
    document.body.style.backgroundImage='url("https://media.giphy.com/media/l378aUIDVRapQXXfG/giphy.gif?cid=ecf05e47xmji6b0k9spm6mfvt7dmhe19r4wyjtkoemnh6tpw&ep=v1_gifs_search&rid=giphy.gif&ct=g")'
    characterExternal = 0;
}, 1000)

    images.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.style.display = 'none';
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function disableButtons() {
    eatButton.disabled = true;
    sleepButton.disabled = true;
    playButton.disabled = true;
}
function enableButtons(){
    eatButton.disabled = false;
    sleepButton.disabled = false;
    playButton.disabled = false;
}


