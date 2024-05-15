// CLASS
// Cetakan untuk Membuat Object dengan Property yg Sama

// Case. Name, Price, Discount
// const products = [
//     { name: 'A', price: 5000, discount: 0 }, 
//     { name: 'B', price: 10000, discount: 10 },
//     { name: 'C', Price: 15000, discount: 15 }
// ]

// products.forEach(item => {
//     console.log(`${item.name} = ${item.price}`)
// })

class Products{
    name = '' 
    price = 0 
    discount = 0

    constructor(name, price, discount){
        this.name = name; 
        this.price = price;
        this.discount = discount; 
    }
}

const product1 = new Products('Apel', 10000, 10)
console.log(product1)

const arrProducts = [
    new Products('Apel', 10000, 10), 
    new Products('Jeruk', 15000, 15), 
    new Products('Anggur', 20000, 20)
]

console.log(arrProducts)

// ENCAPSULATION: Membungkus Data kedalam 1 Unit yang bernama Class
// Public Property
// Private Property

class Users{
    username; 
    email;
    #password;
    constructor(username, password){
        this.username = username;
        this.#password = password;
    }

    get showPassword(){
        console.log(this.#password)
    }

    set validateEmail(email){
        if(!email.includes('@')){
            console.log('Email Not Valid!')
        }else{
            this.email = email
        }
    }
}

const userAccount1 = new Users('ryandefryan', 'abc123')
userAccount1.validateEmail = 'ryan@gmail.com'
console.log(userAccount1)
// console.log(userAccount1.showPassword())