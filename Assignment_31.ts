// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames: string[] = [`Usama` , `Khuzaim` , `Arham` , `Hunain` , `Zartaj`];

if(userNames.length === 0){

console.log(`We need to find some users!`);

 }

else{
        userNames = [];
        console.log(`All users name has been removed. ` + userNames.length);    
    }