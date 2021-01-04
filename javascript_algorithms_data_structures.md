# Javascript Data Structures and Algorithms

For playing around with JS in an interactive console, navigate to any browser console. 

# Preliminaries

### Declaration and Initialization of Variables:

- variables global by default
- to declare a variable use the `var` keyword
- to initialize, assign the variable a value. 
- no need to declare a variable before using it, but it's good convention to do so. 
- initial assignment is optional: ex: these are all valid. 

``` javascript
var number; 
var name; 
var hi = 123; 
var flag = false; 
```
### JS Math Library

[Link to Docs for Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- all properties and methods of `Math` are static, `Math` is not a constructor. 
- implementation dependent (could get different mathematical results on different browsers)

to truncate numbers (reduced precision), try:
```javascript
var z = 34565.4323432
console.log(z.toFixed(2))
```

### Decision Constructs 

While:
- `if`
- `if else`
- `if else if`

are allowed in JS, a cleaner decision construct is `switch`:

```javascript
console.log("enter the month NUMBER: "); 
var monthNum = readline(); 
var monthName; 

switch(monthNum) {
    case "1":
        monthName = "January";
        break;
    case "2":
        monthName = "February";
        break;
    default:
        console.log("bad input");
    //and so forth....
}
```
- `switch` in JS differs form `switch` in other languages because it can be used on any data type, not just on int. 

### Functions:

- can be void/subprocedues or value-returning. ex:

```javascript
function factorial(num) {
    // baseline to multiply by
    var product = 1; 

    for (var i = num; i >= 1; --i) {
        product *= i; 
    }

    return product //returns factorial
}
```
### Function vs. Global Scope



functions can access any variable with global scope. example:

```javascript
function showScope() {
    return scope; 
}

var scope = 10;  //declared after function

console.log(scope);  // returns 10
console.log(showScope()); 
```
setting `scope = 10` without using `var` would have worked as well, but when omitting `var` from a 

# Arrays
# Lists

### Prototyping the Abstract Data Type

To construct a List, need definition and properties:
- properties:
  - `listSize` : variable tracking the total number of elements in the list
  - `pos` : current position in the list
- functions:
  - `length` : returns total number of elements in list
  - `clear` : removes each element in the list
  - `toString` : returns a string representation of the list. 
  - `getElement` : returns the element at `pos` (see above)
  - `insert` : 
# Stacks
# Queues
# Linked Lists
# Dictionaries
# Hashing
# Sets
# Binary Trees and Binary Search Trees
# Graphs and Graph Algorithms
# Sorting Algorithms
# Searching Algorithms
# Advanced Algorithms