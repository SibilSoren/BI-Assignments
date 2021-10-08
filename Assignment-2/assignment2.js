// Q1- Build JavaScript Objects

let myDog = {
  name: "Bruce",
  legs: 4,
  tails: 1,
  friends: 2,
};

// Q2- Accessing Object Properties with Dot Notation

let testObj = {
  hatValue: "ballcap",
  shirtValue: "jersey",
};

let hat = testObj.hatValue;
let shirt = testObj.shirtValue;

// Q3- Accessing Object Properties with Bracket Notation

let newHat = testObj["hatValue"];
let newHat = testObj["shirtValue"];

// Q4- Question Q3 is repeated again in Q4

// Q5- Accessing Object Properties with Variables

let testObjNew = {
  playerNumber: 23,
  player: "",
};

testObjNEw["player"] = "Monatana";

// Q6- Updating Object Properties

myDog.name = "Happy Coder";

// Q7-Add New Properties to a JavaScript Object

myDog.bark = "woof";

// Q8-Delete Properties from a JavaScript Object

delete myDog.tails;

// Q9- Using Objects for Lookups

let lookUp = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "denver",
  echo: "Easy",
  foxtrot: "Frank",
};

function phoneticLookup(key) {
  switch (key) {
    case aplha:
      return lookUp.alpha;
    case bravo:
      return lookUp.bravo;
    case charlie:
      return lookUp.charlie;
    case delta:
      return lookUp.charlie;
    case echo:
      return lookUp.echo;
    case foxtrot:
      return lookUp.foxtrot;
    default:
      return undefined;
  }
}

// Q10- Testing Objects for Properties

function checkObj(obj, props) {
  if (obj.hasOwnProperty(props)) {
    return obj[props];
  } else {
    return "Not Found";
  }
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")); //returns "pony"

// Q11- Manipulating Complex Objects

let randomObj = {
  artist: "Daft Punk",
  title: "Homework",
  release_year: 1997,
  formats: ["CD", "Cassette", "LP"],
  gold: true,
  myMusic: [
    {
      artist: "Eminem",
      title: "Iconic",
      release_year: 2020,
      formats: ["New YOrk", "California"],
    },
    {
      artist: "Cardi B",
      title: "Rage",
      release_year: 2019,
      formats: ["Charlotte", "Miami"],
    },
  ],
};

// Q12- Accessing Nested Objects

var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
    "glove box": {
      box1: "type-1",
      box2: "type-2",
    },
  },
};

var gloveBoxContent = ourStorage.cabinet["glove box"].box1;

// Q13- Accessing Nested Arrays

var myPlants = {
  plant1: [
    {
      name: "Sandal",
      region: ["India", "Australia", "Singapore"],
    },
    {
      name: "Teak",
      region: ["India", "Australia", "Singapore", "Candda"],
    },
  ],
};

var secondTree = myPlants.plant1[1].name;

// Q14- Record Collection

function updateRecords(id, prop, value) {
  if (prop === "tracks" && !collection[id].tracks) {
    collection[id].tracks = [];
  }
  if (prop === "tracks" && value !== "") {
    collection[id].tracks.push(value);
  } else if (prop !== "tracks" && value !== "") {
    collection[id][prop] = value;
  } else if (value === "") {
    delete collection[id][prop];
  }
  return collection;
}

// Q15- Iterate with JavaScript While Loops

var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// Q-16 Iterate with JavaScript For Loops

var myArray = [];
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}

// Q17- Iterate Odd Numbers With a For Loop

var myArray = [];
for (let i = 1; i <= 9; i++) {
  if (i % 2 != 0) {
    myArray.push(i);
  }
}

// Q18- Count Backwards With a For Loop

var myArray = [];
for (let i = 9; i >= 1; i--) {
  if (i % 2 != 0) {
    myArray.push(i);
  }
}

// Q19-Iterate Through an Array with a For Loop

var myArr = [20];
var total = 0;

for (let i = 0; i < myArr.length; i++) {
  total = myArr[i];
}

// Q20- Iterate Through an Array with a For Loop

// Same question is repeated, which is of Q19

// Q21- Nesting For Loops

function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr[i].length; x++) {
      product *= arr[i][x];
    }
  }

  return product;
}

// Q22- Replace Loops using Recursion

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// Q23- Profile Lookup

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Q24- Generate Random Fractions with JavaScript

function randomFraction() {
  var result = 0;
  while (result === 0) {
    result = Math.random();
  }

  return result;
}

// Q25-Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
// Q26- Use the parseInt Function

function convertToInteger(str) {
  return parseInt(str);
}

// Q27- Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

// Q28- Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

// Q29- Use Recursion to Create a Countdown

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

// Q30- Use Recursion to Create a Countdown
//  Same question is repeated - Q29

// Q31- Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// Q32- Use Recursion to Create a Countdown
// Same question is repeated - Q29

// Q33- Use Recursion to Create a Range of Numbers
// Same question is repeated - Q31
