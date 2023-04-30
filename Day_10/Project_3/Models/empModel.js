import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    addr: { type: String },
    password: String
});

const empModel = mongoose.model('emp1', empSchema)

export default empModel