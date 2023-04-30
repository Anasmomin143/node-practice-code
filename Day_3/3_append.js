const fs = require('fs')
// fs.appendFileSync('new.txt','this new data in this file');
fs.appendFile('new.txt', 'this is new data append by async fuction', (err) => {
    if (err) {
        throw (err)
    } else {
        console.log("data appended")
    }
})
