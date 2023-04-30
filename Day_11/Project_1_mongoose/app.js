import mongoose from "mongoose";

mongoose.connect('mongodb://0.0.0.0:27017/tekiskyDB').then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
})
const empSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    addr: { type: String },
    password: String
});

let Emp = mongoose.model('employee', empSchema);

// Emp.find({name:'sonu',password:'test@123'}).then((data)=>{
//     console.log(data[0].name);
// })



// Emp.findById('63a57f133d63d2ed333c4720').then((data)=>{
// console.log(data.name)
// })

// Emp.findByIdAndUpdate('63a57f133d63d2ed333c4720', { age: 40 }).then((data) => {
//     console.log(data.age)
// }).catch((err) => {
//     console.log(err)
// })

Emp.deleteOne({age:36}).then(()=>{
    console.log('deleted')
})








// let e1=Emp({name:'sonu',age:30,addr:"workshop",password:'test@123'});
// let e2=Emp({name:'monu',age:32,addr:"srinagar",password:'test@1345'});
// let e3=Emp({name:'sam',age:33,addr:"vazirabad",password:'test@876'});
// let e4=Emp({name:'swati',age:34,addr:"mgm",password:'test@222'});
// let e5=Emp({name:'shyam',age:36,addr:"chetan nagar",password:'test@333'});
// e1.save();
// e2.save();
// e3.save();
// e4.save();
// e5.save();

//  Emp.find();
