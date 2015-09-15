// from mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

// the event loop is made up of the stack, heap and queue


// Stack
// function calls form a stack of frames

function f(b) {
  var a = 12;
  return a + b;
};

function g(x) {
  var m = 4;
  return f(m * x);
};

console.log(g(2)); //20

// 1st call -> g(2)
  // when g() is called, a first frame is created containing g arguments and local vairables
// 2nd call -> f( m * x) called from within function g
  // when f() is called, a second frame is created containing f arugments and local variables, and pushed
  // on top of the first frame.
  // when f returns, the top frame is popped off the stack, leaving only g() on the stack
  // when g returns, the stack is empty

// Heap
// Objects are allocated in a heap which is just a name to denote a large, mostly unstructed region of memory.


// Queue
// A JS runtime contains a message queue, which is a list of messages to be processed. Each message has
  // an associated function. When the stack is empty, a message is taken out of the queue and processed.
  // Processing involves calling the associated function, thus creating a new stack frame.
  // the processing ends when the stack is empty again.

// JS event loop is non-blocking, with the exception of some legacy features like alert or synchronous XHR.
// These are best to avoid.
