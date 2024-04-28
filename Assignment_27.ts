// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColors: string= "Green"

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.

// Version 1 of the Program

if (alienColors==="Green"){
    console.log("player earned 5 points.");
    }
    else if(alienColors==="Yellow"){
        console.log("player earned 10 points.");
 }
 else if(alienColors==="Red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("Please select right Colors");
    }
    
// Version 2 of the Program

alienColors = "Yellow"

if (alienColors==="Green"){
    console.log("player earned 5 points.");
    }
    else if(alienColors==="Yellow"){
        console.log("player earned 10 points.");
 }
 else if(alienColors==="Red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("Please select right Colors");
    }

 // Version 3 of the Program  
 
 alienColors = "Red"

if (alienColors==="Green"){
    console.log("player earned 5 points.");
    }
    else if(alienColors==="Yellow"){
        console.log("player earned 10 points.");
 }
 else if(alienColors==="Red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("Please select right Colors");
    }


