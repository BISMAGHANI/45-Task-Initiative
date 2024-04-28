let Guest_List:string[]= [`Imran Khan`,`Nawaz Shareef`,`Asif Ali Zardari`];

for(let i=0; i<Guest_List.length; i++){

    console.log(`Dear Mr.` + Guest_List[i] + `, \n\nIt is our pleasure to invite you in our party. \n\nThank You So Much!!`)
}

let absent_Guest: string = `Imran Khan`;

let new_Guest: string = `Kamran Khan Tessori`;

Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){

    console.log(`Dear Mr. ` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party. \n\nThank You So Much!!`)
}

console.log(`Mr. ${absent_Guest} is not coming to the party `)