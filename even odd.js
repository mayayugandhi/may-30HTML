" user strict";

const prompt=require(" prompt-sync")({sigint:true});

let number= parseInt(prompt ("enter an integer number:"));

let result =(number % 2);

switch(result){
    case true:
        console.log('${number}is even number');
        break;
        case false:
            console.log('${number} is odd number');
            break;
}