/**
 * Supermarket
 * 
 * Product Category : Electronic, Fashion, Snack
 *  
 */

class Electronic {
    constructor(productId, productName, productStock, productPrice, productWarranty) {
        this.productId = productId;
        this.productName = productName;
        this.productStock = productStock;
        this.productPrice = productPrice;
        this.productWarranty = productWarranty;
    }
}

class Fashion {
    constructor(productId, productName, productStock, productPrice, productSize) {
        this.productId = productId;
        this.productName = productName;
        this.productStock = productStock;
        this.productPrice = productPrice;
        this.productSize = productSize;
    }
}

class Snack {
    constructor(productId, productName, productStock, productPrice, productExpDate) {
        this.productId = productId;
        this.productName = productName;
        this.productStock = productStock;
        this.productPrice = productPrice;
        this.productExpDate = productExpDate;
    }
}

const electronic = new Electronic("ELEC-001", 'Macbook Pro M1', 5, 10000000, "1 Year Warranty");
const fashion = new Fashion("FASH-001", 'T-Shirt', 3, 150000, "L");
const snack = new Snack("SNCK-001", 'Chitato', 100, 2000, "2024-05-31");
// console.log(['You have buy:', electronic, fashion, snack]);   


/**
 * CASE 
 * PROGRAM Untuk menyimpan data pendaftaran Student Purwadhika ke 1 unit
 * Validasi data inputannya
 * name, username, email (valid), password (min: , max: 10), address, phoneNumber (show data : 0893932*****), programSelected('JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD') 
 */

class studentPurwadhika{
    name;
    username; 
    email;
    #password;
    address;
    phoneNumber;
    programSelected;

    constructor(name, username, address, phoneNumber){
        this.name = name;
        this.username = username;
        this.address = address;
        this.phoneNumber = phoneNumber
    }

    get showPassword(){
        return this.#password
    }

    // get phoneNumber(){
    //     return this.phoneNumber.substring(0, this.phoneNumber.length - 5) + '*****'
    // }

    set validateEmail(email){
        if(!email.includes('@')){
            console.log('Email Not Valid!')
        }else{
            this.email = email
            console.log('Email valid')
        }
    }

    set validatePassword(password){
        if(password.length >= 6 && password.length <= 10){
            this.#password = password
            console.log('Password valid')
        }else{
            console.log('Password should be more than 6 character and less than 10 character')
        }
    }

    set validateprogramSelected(programSelected){
        const programAvailable = ['JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD']
        if(programAvailable.includes(programSelected.toUpperCase())){
            this.programSelected = programSelected.toUpperCase()
            console.log('Program selected valid')
        }else{
            console.log('Program selected not found!')
        }
    }
}

const student1 = new studentPurwadhika('Aris Wildan', 'ariswj', 'Lembang Bandung Barat', "08998712345")
student1.validateEmail = 'aris@gmail.com'
student1.validatePassword = 'aris123'
student1.validateprogramSelected = 'JcWd'
student1.phoneNumber =  student1.phoneNumber.substring(0, student1.phoneNumber.length - 5) + '*****'
console.log(student1)
// console.log(student1.password)
// console.log(student1.phoneNumber)