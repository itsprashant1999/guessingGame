let attempt =1;
let target =10;

let guess =parseInt(prompt("Enter the first guess number!!"));

while(guess!=target){
    attempt++;
    if(guess>target){
        guess =parseInt(prompt("Bigger!! Enter the new guess number!!"));
    }else{
        guess =parseInt(prompt("Smaller!! Enter the new guess number!!"));
    }

}
console.log("you got it");