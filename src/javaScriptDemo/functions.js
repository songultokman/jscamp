function calculate(parameter1, parameter2) {
     return parameter1*parameter2
}

console.log(calculate(3,2,4))

var date=new Date();
var hour=date.getHours();

if(hour>5 && hour<11){
console.log("Good morning");

}else if(hour>11 && hour<17){
console.log("Good afternoon");}

else if(hour>17 && hour<23){
    console.log("Good evening");
}else {
console.log("Good night");}
