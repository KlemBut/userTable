const {checkUser, addUser, userCount} = require('../modules/users');
module.exports ={

    validateUser: (req, res, next) => {
        console.log(req.body)
        const today =  new Date()
        const user = req.body
        const genders = ["male", "female"]
        if (user.name.toLowerCase() === "john") return res.send({message: "username can't be john"})
        if (user.name.length < 1 || user.name.length > 30) return res.send({message:"username too long"})
        if (userCount() > 9) return res.send ({message: "user capacity reached"})
        if (checkUser(user.name)) return res.send({message:"username taken"})
        if(!genders.includes(user.gender.toLowerCase())) return res.send ({message:"please specify gender"}) 
        user.created = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        console.log(user)
        res.send({message: user})
        addUser(user)
        next()
    }
    
}