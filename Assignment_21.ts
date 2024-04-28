// Write a program that creates a list containing these items.

// let person_Name : string = `Hudebiya`;

// const personName_Array : string[] = [`Person`,`Car`,`Cold Drink`];

// Datatype of person object

interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean ,
}
 // person object
let person: person = {
    age : 26,
    name : `Taha`,
    nationality : `Pakistani`,
    student : true ,
}
// print person
console.log(person);

// Datatype of Car Object
interface car {
    car : string,
    colour: string,
    automatic : true,
}

 // car object
 let car = {
    car : `Toyota` ,
    colour : `Black`,
    automatic : true ,
}
// print car
console.log(car);
