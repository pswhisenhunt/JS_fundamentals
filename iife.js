// source: http://benalman.com/news/2010/11/immediately-invoked-function-expression/


// in JS: when a function is invoked, it creates a new scope (execution context). The variables declared
// inside the scope/execution context are only available inside the function's scope/execution, not outside.
// Hence, creating privacy. An IIFE can be used to create encapsulation.

// function () {} will throw an error because: the parser encounters the function keyword and
// treats it as a function declaration not a function expression.

// function foo () {} () will also throw an error, but for a different reason. In this case,
// the parser will see the function declaration that is syntactically correct, but the parans after it
// are read as a grouping perator, and will not invoke the function foo. A grouping operator needs to
// contain an expression. Empty parens will throw an error. If you put something in the parens like
// function foo {} (1) an error will not be throw, however foo is not going to be fired.

// an iife is read as a function expression not a declaration because it is inside the parens.

(function() {
  console.log('helloooo iife!');
}());


// because iife's can be used to 'lock in' values, beucase it's a closure. The functions and vars defined inside
// the iife have access to the iife's outer scope.


// also: IIFE creating namespacing with the module pattern;
// With very little code, you can effectively namespace related methods and properties,
// organizing entire modules of code in a way that both minimizes global scope pollution and creates privacy.

// example from http://benalman.com/news/2010/11/immediately-invoked-function-expression/
var counter = (function(){
  var i = 0;

  return {
    get: function(){
      console.log(i);
    },
    set: function(val){
      i = val;
    },
    increment: function() {
      console.log(++i);
    }
  };
}());

// `counter` is an object with properties, which in this case happen to be
// methods.

counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5

counter.i; // undefined (`i` is not a property of the returned object)
