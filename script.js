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
let previousImageIndex = 0;
// const dropDownOptions = document.querySelectorAll(".dropDownOptions")
// const meatButton= document.querySelector(".meat")
// const cakeButton= document.querySelector(".cake")
// const waterButton= document.querySelector(".water")
// const sakeButton= document.querySelector(".sake")
// const runButton= document.querySelector(".run")
// const danceButton= document.querySelector(".dance")
// const fightButton= document.querySelector(".fight")
// const sleepButton= document.querySelector(".sleep")

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
    characterFunction("eat")

 })
 sleepButton.addEventListener("click", function(){

    characterFunction("sleep")
 })
 playButton.addEventListener("click", function(){
    characterFunction("play")
 })


let images = document.querySelectorAll('.luffyMoments img');
let currentImageIndex = 0;


setInterval(characterMetrics, 1000);
setInterval(characterEvolution, 3000);



function characterMetrics () {
    if(hungerBarWidth < hungerBarMaxWidth){
        newHungerWidth = hungerBarWidth + 5;
        hungerTracker.style.width = newHungerWidth + "px";
    }
    if(boredomBarWidth < boredomBarMaxWidth){
    newBoredomWidth = boredomBarWidth + 2;
    boredomTracker.style.width = newBoredomWidth + "px";
    }
    if(sleepinessBarWidth < sleepinessBarMaxWidth){
    newSleepinessWidth = sleepinessBarWidth + 1;
    sleepinessTracker.style.width = newSleepinessWidth + "px";
    }
    hungerBarWidth = newHungerWidth;
    boredomBarWidth = newBoredomWidth;
    sleepinessBarWidth = newSleepinessWidth
}
function characterEvolution () {
    if(currentImageIndex !== 4 && currentImageIndex !== 5 && currentImageIndex !== 6 && currentImageIndex !== 7 && currentImageIndex !== 8 && !otherLuffyActivities){
        images[currentImageIndex].style.display = 'none';
      
        // Move to the next image, or loop back to the first image
        currentImageIndex = (currentImageIndex + 1) % images.length;
      
        // Show the next image
        images[currentImageIndex].style.display = 'block';
    }
    document.body.style.backgroundImage='url("https://media.giphy.com/media/l378aUIDVRapQXXfG/giphy.gif?cid=ecf05e47xmji6b0k9spm6mfvt7dmhe19r4wyjtkoemnh6tpw&ep=v1_gifs_search&rid=giphy.gif&ct=g")'
};

function characterFunction (action) {
    //getComputedStyle allows you to get the css property values of a desired element! very useful for animations
    
    previousImageIndex = currentImageIndex;
    otherLuffyActivities = 1;
    console.log(previousImageIndex);
if(action=== "eat"){
    currentImageIndex = 5;
    newHungerWidth = hungerBarWidth - 10;
    newBoredomWidth = boredomBarWidth - 3;
} 
if (action === "sleep"){
    document.body.style.backgroundImage='url("https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif?cid=790b7611ahdxp0h2rh8ji1lql6joqlj87px0sh63ogur2i0e&ep=v1_gifs_search&rid=giphy.gif&ct=g")'
    currentImageIndex = 6;
    newSleepinessWidth = sleepinessBarWidth - 15;
    newBoredomWidth = boredomBarWidth - 15;
}
if(action === "play"){
    currentImageIndex = 7;
    newBoredomWidth = boredomBarWidth - 10;
    newHungerWidth = hungerBarWidth + 12;

}
  
    hungerTracker.style.width = newHungerWidth + "px";
    boredomTracker.style.width = newBoredomWidth + "px";
    sleepinessTracker.style.width = newSleepinessWidth + "px";
    
    hungerBarWidth = newHungerWidth;
    boredomBarWidth = newBoredomWidth;
    sleepinessBarWidth = newSleepinessWidth
    
    setTimeout(() => {
        currentImageIndex = previousImageIndex;
        otherLuffyActivities = 0;
        
    }, 1000);

    images.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
    
}


