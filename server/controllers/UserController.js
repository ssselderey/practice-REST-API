const User = require('./models/User')
const Role = require('./models/Role')
class UserController { // регистрация пользователей
    async registration(req, res){
 try {
 const {ussername, password} = req.body
 const candidate = User.findOne({username})
 if (candidate){
 return res.status(400).json({message: "Пользователь с этим именем уже существует"})
 }
 const user = new User({username})
 }
 catch(e){
 console.log(e)
 res.status(400).json({message: "Registration error"})
 }
    }
    async login(req, res){

    }
    async getUser(req,res){
    try {
    const UserRole = new Role()
    const adminRole = new Role({value: "Admin"})
    await UserRole.save()
    await adminRole.save()
    res.json("server work")
    }}
    async check(req, res){
        res.json("Пройдите регистрацию!")
     const {id} = req.query
        res.json(id)
    }
}

module.exports = new UserController()