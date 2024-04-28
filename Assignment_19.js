"use strict";
let Guest_List = [`Imran Khan`, `Nawaz Shareef`, `Asif Ali Zardari`];
//for(let i=0; i<Guest_List.length; i++){
// console.log(`Dear Mr.` + Guest_List[i] + `, \n\nIt is our pleasure to invite you in our party. \n\nThank You So Much!!`)
// }
let absent_Guest = `Imran Khan`;
let new_Guest = `Kamran Khan Tessori`;
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party. \n\nThank You So Much!!`);
}
// console.log(`Mr. ${absent_Guest} is not coming to the party `);
// console.log(`Good News! We find Big Table So We Are Inviting 3 More Tables`);
Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2, 0, `Mariyam Nawaz`);
Guest_List.push(`Bilawal Bhutto Zardari`);
// for(let i=0; i<Guest_List.length; i++){
// console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party. \n\nThank You So Much!!`)
//}
// console.log(`\nSorry! We Can't Arranged Big Table, Only 2 Peoples Will Be Invited`);
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are not Invited for Dinner`);
}
// for(let i=0; i<Guest_List.length; i++){
//   console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nYou are Still Invited. \n\nThank You So Much!!`)
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exercise no # 19
// Print a message indicating the number of people you are inviting to dinner.
console.log(`Total Number of Guests are: ${Guest_List.length}`);
