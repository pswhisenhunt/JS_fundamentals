// undeclared vs. declared

// a variable is undelcared with it does not use the var keyword
// without the var keyword, name is on the global object.

function getName(name) {
  globalName = 'Kim';
  return name ? name : globalName;
};

console.log(getName());
console.log(getName('Pam'));
console.log(globalName);

// undefined
// a variable is declared but not assigned a value
var pamela;
console.log(pamela); // undefined

pamela = 'pam';
console.log(pamela); // pam


// null
// null is a variable that is deifned with the value null. null is a value!
var nothing = null;
console.log(nothing);
