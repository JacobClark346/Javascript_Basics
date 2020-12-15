const name = prompt ("Hi, what is your name?")
const work = prompt ("Hi, " + name + "! What do you do for a living?")
const opinion = prompt ("Interesting! Do you love being a " + work.toLowerCase() + "?")
if (opinion == "yes") {
  console.log (name + " is a " + work.toLowerCase() + " and loves it")
} 