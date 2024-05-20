// OBJECT

// const option = [
//     {
//         fruit: 'Apel',
//         price: 10000
//     },
//     {
//         fruit: 'Anggur',
//         price: 15000
//     },
//     {
//         fruit: 'Jeruk',
//         price: 20000
//     }
// ]

//     let printProduct = ''
//     option.forEach((product, index) => {
//         printProduct += `${index+1}. ${product.fruit} \n`
//     })
//     console.log(printProduct)

//     const selectedProduct = Number(prompt(printProduct)) // Bilangan
//     // console.log(isNaN(selectedProduct))

//     if(selectedProduct <= 0 || selectedProduct > option.length || isNaN(selectedProduct)){
//         alert('Product Not Found!')
//     }else{
//         alert(`${option[selectedProduct-1].fruit} = Rp.${option[selectedProduct-1]?.price?.toLocaleString('id-ID')}`)
// }


// CLASS

class Students{
    name = '' 
    age = 0 
    address = ''
    email = ''
    noHandphone = 0

    constructor(name, age, address, email, noHandphone){
        this.name = name; 
        this.age = age;
        this.address = address; 
        this.email = email; 
        this.noHandphone = Number(noHandphone)
    }
}

const StudentPurwadhika = new Students('Aris Wildan', 20, 'Lembang, Bandung Barat', 'iamaris.com', '628298197112' )

console.log(StudentPurwadhika)