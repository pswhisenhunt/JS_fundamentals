// from MDN

// The apply() method calls a function with a given 'this' value
// and arguments provided as an array (or an array-like object).


// The call() method calls a function with a given this value and arguments provided individually.

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

// the first arg of call is what you want 'this' to be
shoutAt.call(niceGuy,'Pamela', 'Whisenhunt');
shoutAt.call(meanGuy, 'Phillip', 'Whisenhunt');
cheerAt.call(niceGuy, 'Phillip', 'Whisenhunt');

// the first arg of apply is what this is, and the other args are an array
shoutAt.apply(niceGuy, ['Pamela', 'Whise']);
cheerAt.apply(meanGuy, ['Pamela', 'Whise']);

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
// setting 'this' to bunny
roger.speak.call(bunny, 'I\m adorable!');
