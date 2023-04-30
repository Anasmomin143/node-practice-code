let getDetails = (req, res) => {
    res.send('kitchen details Fetch')
}

let updateDetails = (req, res) => {
    res.send('kitchen details updated')
}

let postDetails = (req, res) => {

    res.send('kitchen Post Successfull')
}

let deleteDetails= (req, res) => {
    res.send('kitchen details deleted successfull')
}

export {getDetails,updateDetails,postDetails,deleteDetails}