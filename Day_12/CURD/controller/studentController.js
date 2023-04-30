import StudentModel from "../model/studentModel.js"

let getAllStudentDoc = async (req, res) => {

    try {
        let result = await StudentModel.find()
        // console.log(result)
        res.render('index.ejs', { data: result })
        // console.log(data)
    } catch (error) {
        console.log(error)
    }

}
let createStudentDoc = async (req, res) => {
    try {
        let { name, age, fees } = req.body
        console.log(name)
        const doc = new StudentModel({
            name, age, fees
        })
        let result = await doc.save()
        console.log(result)
        res.redirect('/student/')
    } catch (error) {
        console.log(error)
    }

}
let editStudentDoc = async (req, res) => {
    try {
        const result = await StudentModel.findById(req.params.id)
        console.log(result)
        res.render('edit.ejs', { data: result })

    } catch (error) {
        console.log(error)
    }


}
let updateStudentDoc = async (req, res) => {
    try {
        let { name, age, fees } = req.body
        let result = await StudentModel.findByIdAndUpdate(req.params.id, {
            name, age, fees
        })
        res.redirect('/student')
        //    console.log(req.params)
    } catch (error) {
        console.log(error)
    }

}
let deleteStudentDoc = async (req, res) => {
    try {
        await StudentModel.findByIdAndDelete(req.params.id)
        res.redirect('/student')
    } catch (error) {
        console.log(error)
    }

}
export { getAllStudentDoc, createStudentDoc, editStudentDoc, updateStudentDoc, deleteStudentDoc }