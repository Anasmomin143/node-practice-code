const fs = require('fs')
// for (let i = 1; i <= 5; i++) {
//     let filename = `hellow_world${i}.txt`
//     let filedata = `hellow_world${i}`
//     fs.writeFile(filename, filedata, (err) => {
//         if (err) {
//             throw (err)
//         } else {
//             console.log('new file created')
//         }
//     })
// }

let data = []
for (let i = 1; i <= 5; i++) {
    let filename = `hellow_world${i}.txt`
    fs.readFile(filename, (err, res) => {
        data.push(res.toString())
        console.log(data)
    },)
}
