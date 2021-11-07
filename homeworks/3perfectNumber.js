
function perfectNumber() {

    for(let i=2; i<1000; i++){
        let total=0

        for(let j=1; j<i; j++){

            if(i%j==0){
              
                total+=j
            }
        }
        if(i==total){
            console.log(i+ " sayısı mükemmel sayıdır.")
            
        }
        /*else{
            console.log(i+ " sayısı mükemmel değildir.")
        }*/

    }
}

perfectNumber()