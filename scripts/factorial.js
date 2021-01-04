function factorial(num) {
    // baseline to multiply by
    var product = 1; 

    for (var i = num; i >= 1; --i) {
        product *= i; 
    }

    return product //returns factorial
}

console.log(factorial(10));