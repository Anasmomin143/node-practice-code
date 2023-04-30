const fs = require('fs')
// fs.writeFileSync('hello.text', 'hello my name is anas')
// const data = fs.readFileSync('hello.text', 'utf-8')
// console.log(data)

// fs.readFile('hello.text', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data.toString())
//     }
// })

// fs.writeFile('newmsg.txt', 'to day is friday', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('new file created with data')
//     }
// })

fs.appendFile('newmsg.txt', 'hi my name is anas', (er) => {
if (er) {
    console.log(er)
} else {
    console.log('new data is appended')
}
})