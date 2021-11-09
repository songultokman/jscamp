

function isPrime(...numbers) {
   
    for (let j = 0; j < numbers.length; j++) {
       
        let prime=true

        if(numbers[j]<=1){
            console.log(numbers[j] + " sayısı geçersizdir. Lütfen geçerli bir sayı girin!")
        
           }else{

              for (let i = 2; i<numbers[j]; i++ ) {
    
                if(numbers[j]%i==0){

                  console.log(numbers[j] + " sayısı asal değil!")
                  prime=false
                  break
                }
             }  
          if(prime==true)  
          {
              console.log(numbers[j] + " sayısı asaldir.")
          }
        }
    }
      
}

isPrime(-10)
isPrime(10,43,32,79,1)
isPrime(0,11,5,20,100,1000)
