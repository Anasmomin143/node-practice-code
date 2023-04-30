let getDetails = (req, res) => {
    res.send('mobile details Fetch')
}

let updateDetails = (req, res) => {
    res.send('mobile details updated')
}

let postDetails = (req, res) => {

    res.send('mobile Post Successfull')
}

let deleteDetails= (req, res) => {
    res.send('mobile details deleted successfull')
}

export {getDetails,updateDetails,postDetails,deleteDetails}