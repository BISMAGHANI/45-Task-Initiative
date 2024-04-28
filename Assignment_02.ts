// Storing the person name in a variable

let PersonName:string = "Bisma Ghani"

// printing a person name in a lowercase

console.log("lowercase:", PersonName.toLowerCase());

// printing a person name in a uppercase

console.log("uppercase:",PersonName.toUpperCase());


console.log(PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.
slice(1).toLowerCase()).join(' '));



