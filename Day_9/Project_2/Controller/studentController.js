

let studentsName = (req, res) => {
    res.send('Anas Momin')
}
let studentsAge = (req, res) => {

    res.send('22')
}
let studentsAddress = (req, res) => {
    res.send('nanded')
}

export { studentsName, studentsAge, studentsAddress };