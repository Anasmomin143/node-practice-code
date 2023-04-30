const validator = require('validator')
let result = validator.isEmail('anasmmoni@gmail.com')
result = validator.isDate('25-09-2000', { format: 'DD-MM-YYY' })
console.log(result)