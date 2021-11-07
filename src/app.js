console.log("Merhaba benim adım name")

console.log("merhabaa canım")

let dolarDun=9.30

let dolarBugun=9.20
{
    let dolarDun=9.1
}
console.log(dolarDun)

let konutKredileri=["Konut kredisi", "Emlak kredisi", "Kamu konut kredisi"]
console.log("<ul>")
for(let i=0; i<konutKredileri.length;i++)
{
    console.log("<li>"+ konutKredileri[i])
}
console.log("</ul>")

let student={id:1, name:"Songül"}
//console.log(student);

function save(puan =10, ogrenci){
    console.log(ogrenci.name+": "+ puan)
}
save(undefined,student);


let students=["songül tokman","engin demiroğ"]
console.log(students);

let students2=[student, {id:2, name:"Sibel"},"Ankara",{city:"İstanbul"} ]
console.log(students2);
  
//rest
let showProducts= function (id, ...products){
    console.log(id);
    console.log(products[0])

}
showProducts(10,"Elma", "Armut", "Karpuz")

//spread
let points=[1,2,3,4,50,4,60]
console.log(...points)
console.log(Math.max(...points))

//destructuring
let populations=[1000,2000,3000,[4000,5000]]
let [small,medium,high,[veryhigh, maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}
someFunction(populations)

//normalde someFunction(cities) yazılır arrayler
//someFunction([]) şeklinde yazılırsa o zaman destructuring yapacağını anlar program


//objeleri de distruct etmek istersek
let category={id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)