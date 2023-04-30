let dashboardController = (req, res) => {
    let user = req.body.username
    let pass = req.body.userpass
    console.log(user, pass)
    if (user == 'anas' && pass == 'anas@123') {
        res.render('./dashboad.ejs', { name: user })
    } else {
        res.render('./failedlogin.ejs')
    }


    // res.send('hello')
}

export default dashboardController