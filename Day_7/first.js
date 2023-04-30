const fs = require('fs')

// for (let i = 1; i <= 5; i++) {
//    let filename=`hello${i}.txt`
//    let filedata=`hello${i}` 
//    fs.writeFileSync(filename,filedata)
// }
var data = [];
for (let i = 1; i <= 5; i++) {
    console.log('hello')
    let filename=`hello${i}.txt`
   let newdata= fs.readFileSync(filename,'utf-8')
   data.push(newdata)
}
data.map((ele)=>{
fs.appendFileSync('hello6.txt',` ${ele}`)
})