// from MDN:
// The bind() method creates a new function that, when called, has its this keyword set
// to the provided value, with a given sequence of arguments preceding any provided when the
// new function is called.


// The bind() function creates a new function (a bound function) with the same function body
// (internal call property in ECMAScript 5 terms) as the function it is being called on (the bound function's target function)
//  with the 'this' value bound to the first argument of bind(), which cannot be overridden.

var niceGuy = {
    shout: 'yay!',
    cheer: 'go go!'
};

var meanGuy = {
    shout: 'go away!',
    cheer: 'you stink!'
};

function shoutAt(firstName, lastName) {
    console.log(this.shout + ' ' + firstName + ' ' + lastName);
};

function cheerAt(firstName, lastName) {
    console.log(this.cheer + ' ' + firstName + ' ' + lastName);
};

// create a new function with '.bind()'
// .bind
var meanShout = shoutAt.bind(meanGuy);
var niceShout = shoutAt.bind(niceGuy);

meanShout('Sam', 'Silver');

var meanShoutAtSally = shoutAt.bind(meanGuy, 'Sally', 'Salamander');
meanShoutAtSally();

var niceCheerAtBob = cheerAt.bind(niceGuy, 'Bob', 'Berry');
niceCheerAtBob();


// define person obj
function Person(name) {
  this.name = name;
};

Person.prototype.speak = function(message) {
  console.log(this.name + ' says...' + message);
};

var roger = new Person('Roger');
roger.speak('hello');


//define bunny obj
function Animal(name) {
  this.name = name;
};

var bunny = new Animal('bunny');

// you can borrow the speak method from person and use it with an animal object by
// setting 'this' to bunny. With bind, a function is returned.
var bunnySays = roger.speak.bind(bunny, 'I\m adorable!');
bunnySays();

var cat = new Animal('cat');
var catSays = roger.speak.bind(cat, 'Meoowwww');
catSays();
console.log(catSays); // output [Function] because bind() returns a bound function..it's 'this' value is bound to whatever is passed in as the 1st arg and cannot be overridden;
