// alert("JS is linked")
// the console logs will only be present in the browser inspection console not in VS code!!!!!

// const tamagotchiName = prompt("Name your Tamagotchi :)")


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
const healthTracker=document.querySelector(".healthTracker")
const meatButton= document.querySelector(".meat")

meatButton.addEventListener("click", function() {
    // Get the current width of the healthTracker
    let currentWidth = parseFloat(getComputedStyle(healthTracker).width);

    // Increase the width by 10px
    let newWidth = currentWidth - 10;
    
    // Update the width of the healthTracker
    healthTracker.style.width = newWidth + "px";
});
