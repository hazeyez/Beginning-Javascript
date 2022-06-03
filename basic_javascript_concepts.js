
// initialize (assign) a variable and print it:
let myName = 'Mike';
console.log(myName);

// Print firstName and lastName variables together:
let firstName = 'First';
let lastName = 'Last';
console.log(firstName, lastName)

// OR:
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// OR:
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

// Define variable as a number:
const interestRate = 0.3;
// interestRate = 1; (uncomment & delete this to test)
console.log(interestRate)

/*  error line 20, because using "const" instead of "let" does not
    allow reassignment of variable. using "let" instead of "const"
    will allow var on line 21 to override var on line 20 */

/*  what "types" of data can be assigned to variables? we've used strings
    and numbers above, but there are more "types" in two categories Primatives & Reference:

    Primatives aka Value Types:
        - Strings
        - Numbers
        - Booleans
        - undefined
        - null */

// String Literal
let hair = "Brown";     

// Number Literal
let age = 36;           

// Boolean Literal
let isApproved = true;  
    /* e.g. if user has chosen shipping, and other code relies on it
       to be [true or false] to then do a different function. */

// undefined
let address = undefined;  // (uninitialized/unassigned = auto undefined)

// null
let selectedColor = null; 
    /* e.g. if user has a selection of colors to choose and has not
       chosen, set to null. if user selects red, can be scripted
       to initialize var to 'red' and if selection removed = null */ 
/*
    Reference Types:
    - Objects
    - Arrays
    - Functions */

// Object Literal
let person = {          
    hair: 'Brown',    // - Properties of object:
    age: 36
};

console.log(person)

// if you want to change properties of object:

// Dot Notation
person.hair = 'Red';

// Bracket Notation
let selection = 'hair';
person[selection] = "Blonde";
//person['hair'] = 'Blonde';

console.log(person.hair)

/* which is better? generally Dot Notation. Bracket Notation comes
   in handy if we don't know the variable and it's selected by the
   user at runtime. so we can leave it to change dynamically. Line
   61 shows a static Bracket Notation example. */

// Arrays - data structure that is a lists of objects:

let colorChoices = ['red', 'blue']; // indexed as 0, 1 (see console)
colorChoices[2] = 'green';          // adds 3rd item to index
console.log(colorChoices[0]);       // 0 = red's index number, only print red.
console.log(colorChoices);          // print whole index 0, 1, 2

// Functions - set of statements that performs task or calcs a value:

function greet() {
    console.log('Hello World');
}

greet();
// -----------------------------

function greetName(name) {          // name = parameter of function
    console.log('Hello ' + name);
}

greetName('John');                  // John & Mary = arguments of parameter
greetName('Mary');
// -----------------------------

    // This function is performing a task
function greetFullName(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greetFullName('John', 'Smith');
// -----------------------------

    // This function is calculating a value
function square(number){
    return number * number;
}

let number = square(2);     // this way sets a variable for 'number'
console.log(number);
console.log(square(2));     // this way gets a value and passes calc to console.log