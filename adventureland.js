console.log("###########################################")
console.log("Welcome to Aventureland, Land of Adventure!")
console.log("###########################################\n")

var ready = prompt("Are you ready for adventure?")

if (ready === "yes") {
  console.log("Woot! Let's go.");
}
else {
  console.log("Okay, you stay here. Bye!");
}

console.log("\n First, let's build a character. I'll ask a series of questions, and your answers will help determine how you experience Adventureland.")

var characterName = prompt("Give yourself a name:")

var faveColor = prompt("Okay, " + characterName + " what is your favorite color?")

var superSkill = prompt("And, if you could either fly or turn invisible, which would you do?")

console.log("\n Welcome to Adventureland, " + characterName + "! You are a jolly adventurer who wears a " + faveColor + " hat and can " + superSkill + ". That should be handy!")


// So, there should be some puzzles and adventures, but they should also involve the variables. Like, one they can pass by flying OR by being invisible, or some that only are available to flyers, etc. And one or two that involve the color of hats. 

// Now, can you do this game in Ruby? 