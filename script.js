// alert("JS is linked")
// the console logs will only be present in the browser inspection console not in VS code!!!!!

// const tamagotchiName = prompt("Name your Tamagotchi :)")


let fitnessBarWidth;
let hungerBarWidth;
let thirstBarWidth;
let boredomBarWidth;
let exhaustionBarWidth;

class TamagotchiAttributes {
    constructor (name, age, hp, fitness, hunger, thirst, boredom, exhaustion) {
        this.name = name;
        this.age = age;
        this.hp = hp;
        this.fitness = fitness;
        this.hunger = hunger;
        this.thirst = thirst;
        this.boredom = boredom;
        this.exhaustion = exhaustion;
    }
}

// const user = new TamagotchiAttributes(tamagotchiName, 1, 10, 0, 0, 0, 0, 0); // instantiated class with variable user
const healthTracker= document.querySelector(".healthTracker")
const fitnessTracker = document.querySelector(".fitnessTracker")
const hungerTracker = document.querySelector(".hungerTracker")
const thirstTracker = document.querySelector(".thirstTracker")
const boredomTracker = document.querySelector(".boredomTracker")
const exhaustionTracker = document.querySelector(".exhaustionTracker")
const dropDownOptions = document.querySelectorAll(".dropDownOptions")

const meatButton= document.querySelector(".meat")
const cakeButton= document.querySelector(".cake")
const waterButton= document.querySelector(".water")
const sakeButton= document.querySelector(".sake")
const runButton= document.querySelector(".run")
const danceButton= document.querySelector(".dance")
const fightButton= document.querySelector(".fight")
const sleepButton= document.querySelector(".sleep")

// the section below is not dry at all.... needs to be revised

meatButton.addEventListener("click", function(){
    characterNutrition("meat")
});
cakeButton.addEventListener("click", function(){
    characterNutrition("cake")
});
waterButton.addEventListener("click", function(){
    characterNutrition("water")
});
sakeButton.addEventListener("click", function(){
    characterNutrition("sake")
});
runButton.addEventListener("click", function(){
    characterActivity("run")
});

danceButton.addEventListener("click", function(){
    characterActivity("dance")
});
fightButton.addEventListener("click", function(){
    characterActivity("fight")
});
sleepButton.addEventListener("click", function(){
    characterActivity("sleep")
});


let images = document.querySelectorAll('.luffyMoments img');
let currentImageIndex = 0;

setInterval(characterEvolution, 1000);

function characterEvolution () {
    if(currentImageIndex !== 4){
        images[currentImageIndex].style.display = 'none';
      
        // Move to the next image, or loop back to the first image
        currentImageIndex = (currentImageIndex + 1) % images.length;
      
        // Show the next image
        images[currentImageIndex].style.display = 'block';
      }
}

function characterNutrition (foodItem) {
    //getComputedStyle allows you to get the css property values of a desired element! very useful for animations
if(foodItem === "meat"){
    healthBarWidth = parseFloat(getComputedStyle(healthTracker).width);
    let newWidth = healthBarWidth - 10;
    
    // Update the width of the healthTracker
    healthTracker.style.width = newWidth + "px";
}
    return healthTracker.style.width;
}
function characterActivity () {
    //getComputedStyle allows you to get the css property values of a desired element! very useful for animations
    healthBarWidth = parseFloat(getComputedStyle(healthTracker).width);

    let newWidth = healthBarWidth - 10;
    
    // Update the width of the healthTracker
    healthTracker.style.width = newWidth + "px";
}