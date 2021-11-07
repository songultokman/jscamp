// export class Customer{
//    constructor(id,customerNumber){
//           this.id=id
//           this.customerNumber=customerNumber 
//      }
//  }
//      let customer=new Customer(1,"12345");
//      customer.name="Songül Tokman"
//      console.log(customer.name)
//     console.log(customer.id)
//     console.log(customer.customerNumber)

//     Customer.bisey="Birşey"
//     console.log(Customer.bisey)

//     class IndividualCustomer extends Customer{
//         constructor(firstName,id,customerNumber){
//         super(id,customerNumber)
//         this.firstName=firstName
//        }
//     }
    
//     class CorporateCustomer extends Customer{
//            constructor(companyName,id,customerNumber){
//                super(id,customerNumber)
//                this.companyName=companyName
//            }
//     }

//     let corporateCustomer=new CorporateCustomer("trendyol",1,"7895")
//     console.log(corporateCustomer.companyName)
//     console.log(corporateCustomer.id)
//     console.log(corporateCustomer.customerNumber)

    let products=[
                  {id:1, name: "Acer Laptop", unitPrice:15000},
                  {id:2, name: "Hp Laptop", unitPrice:16000},
                  {id:3, name: "Dell Laptop", unitPrice:13000},
                  {id:4, name: "Casper Laptop", unitPrice:17000},
    ]

    console.log("<ul>")
    products.map(product=>console.log(​​`<li>${product.name}</li>​`))
     console.log("</ul>")

    // products.map(product=>{
    //     console.log(product)
    //     console.log(`<li>${product.name}</li>`)
    // })


    // let filteredProducts=products.filter(product=>product.unitPrice>15000)
    // console.log(filteredProducts)

    // let cartTotal=products.reduce((acc,product)=>acc + product.unitPrice,0)
    // console.log(cartTotal)