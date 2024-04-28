// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function storeCarInfo(manuFacturer:string, modelName:string, ...extraOption: {[key : string ]:any} []){

const carInfo = {
    manuFacturer,
    modelName,
    ...Object.assign({}, ...extraOption)
}

return carInfo;

};

let answer = storeCarInfo(`Honda` , `Civic` , {color:`Black`}, {features:[`Navigation` , `Power Window`]})

console.log(answer);


let Obj1 = {num1:1 , num2:2};

let Obj2 = {num3:1 , num2:5};

let Obj3 = Object.assign(Obj1 , Obj2);

console.log(Obj3);
