
function isFriendNumber(number1,number2){

    let total1=calculateSubNumber(number1)
    let total2=calculateSubNumber(number2)

   if(number2==total1 && number1==total2){
       console.log(number1 +" ve "+ number2 +" sayıları arkadaş sayılardır.")
   }
   else{
       console.log(number1 +" ve "+ number2 +" sayıları arkadaş sayı değildir.")
   }
}

function calculateSubNumber(number){
   
    let total=0
   
    for(let i=1; i<number; i++) {
        if(number%i==0){
            total+=i
        }
    }
    return total
}


isFriendNumber(220,284)
isFriendNumber(10,15)
isFriendNumber(1184,1210)