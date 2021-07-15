const fs = require('fs');


let img_folder = "img/idol_cards/";



var fileNames = fs.readdirSync(img_folder);

let file = [];

for (let i = 0; i < fileNames.length; i++) {
    file.push(fileNames[i]);
}

let card_one = file[0];
let card_two = file[1];

console.log(card_one);

