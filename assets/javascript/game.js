// Variables

var crystal = {
    red: 
    {
        Name: "Red",
        value: 0
    },

    blue: 
    {
        Name: "Blue",
        value: 0
    },
    orange:
    {
    Name: "Orange",
    value: 0
    },

    purple: 
    {
    Name: "Purple",
    value: 0
    }

};

var currentScore = 0;
var targetScore  = 0;

var wins   = 0;
var losses = 0;




// Functions 

var getRandom = function(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
    
}

function startGame() {

    // reset score
 currentScore = 0;

    // set a new target score between 19-120

targetScore = getRandom(19,120)

    // set different values for crystals between 1-12
crystal.red.value    = getRandom(1,12)
crystal.blue.value   = getRandom(1,12)
crystal.orange.value = getRandom(1,12)
crystal.purple.value = getRandom(1,12)

    // change html to see changes

    $("#score").html(currentScore)
    $("#targetScore").html(targetScore)


    // console logs 

console.log("Target Score: " + targetScore )
console.log("Red:" + crystal.red.value)
console.log("Blue:" + crystal.blue.value)
console.log("Orange:" + crystal.orange.value)
console.log("Purple:" + crystal.purple.value)

}

// respond to crystal click 

var addValues = function(crystal){
    currentScore = currentScore + crystal.value;

$("#score").html(currentScore);

// call the win function 
win();

// console logs
    console.log("your score" + currentScore);
}

// Win function and lose/reset

var win = function(){

if (currentScore > targetScore){
alert("You Lose!")

losses++

$("#losses").html(losses)

startGame();

}

else if (currentScore === targetScore) {

alert("You Win!")

wins++

$("#wins").html(wins)

startGame();
}

}



// Main Process

    // Click events

startGame();

    $("#red").click(function() {

    addValues(crystal.red);
    
    });
    
    $("#blue").click(function() {
    
    addValues(crystal.blue);
        
    });
    
    $("#orange").click(function() {
    
    addValues(crystal.orange);
      
    });
    
    $("#purple").click(function() {
        
     addValues(crystal.purple);
        
    });