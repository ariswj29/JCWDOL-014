// Case.
// Di sebuah supermarket, terdapat beberapa product category. Mulai dari electronic, fashion dan snack. 
// Setiap product category memiliki identitas yang berbeda-beda, seperti product name, product stock, dll.
// 1. Jabarkan apa saja identitas yg dimiliki untuk masing-masing product category!
// 2. Class berdasarkan product category

// Electronic: Product Name, Product Price, Product Discount, Product Stock, Product SerialNumber, Product Guarantee, Product Color 
// Fashion: Product Name, Product Price, Product Discount, Product Stock, Product Size, Product Color, Product Material
// Snack: Product Name, Product Price, Product Discount Product Stock, Product Flavour, Product Expiry, Product Netto

// INHERITANCE: Pewarisan Property
class Products{
    constructor(name, price, discount, stock, color){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.color = color;
    }
}

class ProductElectronic extends Products{
    constructor(name, price, discount, stock, color, serialNumber, guarantee){
    super(name, price, discount, stock, color)
        this.serialNumber = serialNumber;
        this.guarantee = guarantee;
    }
}

const inputElectronic = new ProductElectronic('123', '2024', 'Blue', 'A')
console.log(inputElectronic)

class ProductFashion extends Products{
    constructor(name, price, discount, stock, color, size, material){
    super(name, price, discount, stock, color)
        this.size = size; 
        this.material = material;
    }
}

const inputFashion = new ProductFashion('123', '2024', 'Blue', 'A')
console.log(inputFashion)

class ProductSnack extends Products{
    constructor(name, price, discount, stock, color, flavour, expiry, netto){
    super(name, price, discount, stock, color)
        this.flavour = flavour;
        this.expiry = expiry; 
        this.netto = netto;
    }
}

const inputSnack = new ProductSnack('123', '2024', 'Blue', 'A')
console.log(inputSnack)