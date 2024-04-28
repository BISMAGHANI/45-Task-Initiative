var Guest_List = ["Imran Khan", "Nawaz Shareef", "Asif Ali Zardari"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr." + Guest_List[i] + ", \n\nIt is our pleasure to invite you in our party. \n\nThank You So Much!!");
}
var absent_Guest = "Imran Khan";
var new_Guest = "Kamran Khan Tessori";
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " + Guest_List[i] + ",\n\nIt is our pleasure to invite you in our party. \n\nThank You So Much!!");
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party "));
