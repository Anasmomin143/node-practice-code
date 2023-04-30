import fs from 'fs'

fs.readFile('x.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log('hmmmm')
})