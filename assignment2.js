// Q1- Build JavaScript Objects

let myDog = {
    "name": "Bruce",
    "legs": 4,
    "tails": 1,
    "friends": 2
}

// Q2- Accessing Object Properties with Dot Notation

let testObj = {
    "hatValue": "ballcap",
    "shirtValue": "jersey"
}

let hat = testObj.hatValue;
let shirt = testObj.shirtValue;

// Q3- Accessing Object Properties with Bracket Notation

let newHat = testObj["hatValue"];
let newHat = testObj["shirtValue"];

// Q4- Question Q3 is repeated again in Q4

// Q5- Accessing Object Properties with Variables

let testObjNew = {
    playerNumber: 23,
    player: ""
}

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
}

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
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
        "CD",
        "Cassette",
        "LP"
    ],
    "gold": true,
    "myMusic": [

    ]
}
