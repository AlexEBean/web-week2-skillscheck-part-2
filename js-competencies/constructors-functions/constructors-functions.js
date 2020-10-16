
//////////////////PROBLEM 1////////////////////

// Get the following constructor function to pass the tests.

//BROKEN ON PURPOSE 

function EgyptianGoddesses(name, oversees, strength, weakness) {
  this.name = name;
  this.oversees = oversees;
  this.strength = strength;
  this.weakness = weakness;

  return {
    name,
    oversees,
    strength,
    weakness
  }
  
}

// Use the variable maatCharacteristics below to create a new Egyptian Goddess - save it to 
// the variable maat.

var maatCharacteristics = ['Maat', 'Truth and Justice', 'Balancing and Just', 'Exacting in her standards']

//Code here
const maat = new EgyptianGoddesses(maatCharacteristics[0],maatCharacteristics[1],maatCharacteristics[2],maatCharacteristics[3])


//////////////////PROBLEM 2////////////////////

// Get the following constructor function to pass the tests.

//BROKEN ON PURPOSE 

function TestScores(name, percent) {
  this.name = name;
  this.percent = percent;

  return name + percent
}


//Now create a new TestScore with the above constructor function, and save it in a variable called suzy. Suzy got a 98 on the test.

//Code here
const suzy = new TestScores("Suzy", 98)



//////////////////PROBLEM 3////////////////////

// Write a constructor function Caveman that takes in a name, age, and weapon as its three parameters.

// Each caveman should have a property called health that is equal to 100 and a property called energy 
// that is equal to 100.

//Code here
function Caveman (name, age, weapon){
  this.name = name
  this.age = age
  this.weapon = weapon
  this.health = 100
  this.energy = 100
}

// Now create a new Caveman with the constructor function you made called 'larry'. 
// Larry is 25 and has a 'rock' for a weapon.
// Save the result to a variable called larry.

//Code here

const larry = new Caveman("Larry", 25, "rock")


