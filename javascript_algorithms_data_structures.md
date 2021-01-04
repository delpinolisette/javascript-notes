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
setting `scope = 10` without using `var` would have worked as well, but when omitting `var` from a variable declaration makes it global, even when we do it inside of a function (the difference is that the variable is reassinged globally when the function is called). For example:

```javascript
function showScope() {
    var scope = 2; 
    return scope; 
}

var scope = 10;  //declared after function

console.log(scope);  // returns 10
console.log(showScope()); //returns 2
console.log(scope); //returns 10
```
This works as expected. Now notice that happens when we omit the `var`

```javascript
function showScope() {
    scope = 2; 
    return scope; 
}

scope = 10;  //declared after function

console.log(scope);  // returns 10
console.log(showScope()); //returns 2
console.log(scope); //returns 2!!
```
From this we can see that for expected behavior, we should always declare variables with `var` before using them. Not doing this sets the variable to have global scope by default, even when assigned inside of a function. 

- important! Javascript does not have block scope, only function and global scope. Should still write for loops assuming we have block scope. 

### Recursion

We can rewrite our `factorial` function to use recursion:

```javascript
function factorial(num):
    // if at 1, then we're done and return it
    if (num == 1) {
        return num; 
    }
    // if not, perform factorial operation recursively
    else  {
        return number*factorial(number - 1); 
    }
```

# Arrays

- Important facets outlined below:

### Creation

All these are valid:
```javascript
var arr = [];  //most efficient constructor
var arr = [1,2,3]; 
var arr = new Array(); 
var arr = new Array(1,2,3); 
var arr = new Array(3); //array of length 3

// can have heterogenous types
var arr = ["hey", 3, 99, "hi", null, true, false]; 
```
also if `arr` is array, `Array.isArray()` returns `true`. 

the `[]` operator writes and accesses values in the array:

```javascript
var arr = [];

//array population
for (var i = 0; i < 10; ++i>) {
    arr[i] = i+1; 
}


//access
var sum = 0; 

for (var i = 0; i < num.length; ++i>) {
    sum+=arr[i]; 
}
```
- finally, to create an array from a sentence, (string to array):

```javascript
var sen = "this is example sentence"

var arrFromSen = sen.split(" ") //split by space
// then arrFromSen is an array: ["this", "is", "example", "sentence"]
```

### Shallow Copy, Deep Copy

you can assign one array to another (*shallow copy*):

```javascript
var arr2 = arr; //shallow copy
```
however this only assigns the *reference*. Any changes to `arr` will happen to `arr2`. 

To avoid this, a *deep copy* is often preferable. To make a deep copy, need to populate new array with elements of original, a good way to do this is to write a copy function:

```javascript
function copy(arr, arr2) {
    for (var i = 0; i < arr.length; ++i>) {
        arr2[i] = arr[i]; 
    }
}

var arr2 = []; 
copy(arr,arr2); 
///now changes to arr don't change arr2. 
```

notice `console.log(arr)` will actually print the contents of the array, rather than a memory address. 

### Accessor Functions

- `indexOf(elem)` : returns index of element in the array, -1 if no element exists. 
    - `if (arr.indexOf(elem)>0) {}` is a useful way to check if an element is in an array
    - only returns first occurence of an element. 
- `lastIndexOf(elem)` : same as indexOf, but returns the last occurence of an element in the array. 

### String Representation of Arrays:

- `join()` : calling `arr.join()` joins all the elements of an array into a string where commas separate the elements. 
- `toString()` : calling `arr.toString()` also sends to a string all the elements of an array, separated by commas. 
  - `toString()` is automatically called when you print an array with either `print()` or `console.log()`

### Exercises with Arrays:


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

### Implementation:

First, we add a constructor before implementing all the functions and defining the properties outlined above:

```javascript

//class constructor
function List() {
    this.listSize = 0
    this.pos = 0 //initial position is 0, 0 elements in the list. 
    this.dataStore = [] //array that will store all elements
    this.clear = clear;
}
```

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