function addToCart(quantity ,productName="Limon") {
    console.log("Sepete eklendi : "+ productName + " adet: "+ quantity)
}

addToCart(15)
addToCart()

let hello= ()=>{                 //function tanımlama1
    console.log("Hello")
}

hello()

let hello2=function(){          //function tanımlama2
    console.log("hello2")
}
hello2();

let product7= {productName:"Elma", quantity:5, unitPrice:10}


function addToCart6(product8){
    console.log("Ürün: "+ product8.productName + " adet: "+ product8.quantity+ " Fiyat: " + product8.unitPrice)
    
}

addToCart6(product7)


function addToCart10(x){
    console.log(products)
}

let products=[
    {productName:"Elma", quantity:5, unitPrice:10 },
    {productName:"Armut", quantity:5, unitPrice:10 },
    {productName:"Karpuz", quantity:5, unitPrice:10 }
]

addToCart10(products)


function add(bisey,...numbers){ //rest
    let total=0
    for(let i=0; i<numbers.length; i++){
       total+=numbers[i]
    }
    console.log(bisey)
    console.log(total)
}

//add(20,30)
add(20,30,40)

let numbers=[30,10,500,600,120]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))


let [içAnadolu, marmara, karadeniz,[içAnadoluSehirleri]]=[

    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},

        [
          ["Ankara", "Konya"],
          ["İstanbul","Bursa"],
          ["Sinop", "Trabzon"]
        ]
]
//console.log(içAnadolu.name+ " "+ içAnadolu.population)
console.log(içAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
={productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)