let findPrime=function() {
   
    let prime=true

    for (let i = 2; i<=1000; i++) {
     
      for (let j = 2; j<i; j++ ) {
    
         if(i%j==0){

           // console.log(i + " sayısı asal değil!")
               prime=false 
               break     
         }   
         else{
           prime=true
         }  
      }         
      
      if (prime==true) {
         console.log(i + " sayısı asaldir.")
      }
    } 
}

findPrime()