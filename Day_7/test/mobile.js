let redmi = {
    model: 'note 10',
    price: 9999,
    storage: '128 GB',
    battary: '4500Mah',
    get_price: function () {
        return this.price
    },
    get_Model: function () {
        return this.model
    }

}
let samsung = {
    model: 's22Ultra'
    , price: 105000,
    storage: '256GB',
    battary: '4000Mah',
    get_price: function () {
        return this.price
    },
    get_Model: function () {
        return this.model
    }
}
let nokia = {
    model: 'power 10',
    price: 45000,
    storage: '128GB',
    battary: '4100Mah',
    get_price: function () {
        return this.price
    },
    get_Model: function () {
        return this.model
    }
}
let motorola = {
    model: 'moto G5',
    price: 10000,
    storage: '128GB',
    battary: '4500Mah',
    get_price: function () {
        return this.price
    },
    get_Model: function () {
        return this.model
    }
}

// console.log(redmi.get_price())
module.exports={redmi,samsung,motorola,nokia}



