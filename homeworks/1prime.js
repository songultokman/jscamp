
function isPrime(...numbers) {
   
    let prime=true

    for (let j = 0; j < numbers.length; j++) {
         
        if(numbers[j]==1 || numbers[j]==0){
            console.log("lütfen geçerli bir sayı girin")

           }else{

              for (let i = 2; i<numbers[j]; i++ ) {
    
                if(numbers[j]%i==0){

                  console.log(numbers[j] + " sayısı asal değil!")
                  prime=false
                  break
                }
                else{
                  prime=true
                }
              }  
         
          if(prime==true)  
          {
              console.log(numbers[j] + " sayısı asaldir.")
          }
        }
    }
      
}

isPrime(3)
isPrime(10,43,32,79)
isPrime(11,5,20,100,1000)
