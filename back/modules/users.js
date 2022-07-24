userArr = []
function addUser (newUser) {

    userArr.push(newUser)
}
function checkUser (newUserName) {
    return userArr.some(x => x.name === newUserName)
}
function userCount () {
    return userArr.length
}

module.exports= {
    checkUser,
    addUser,
    sendUser: (req, res) => {
        res.send({userArr})
    },
    userCount
}