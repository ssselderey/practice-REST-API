const Router = require('express')
const router = new Router()
const {check} = require('express-validator')
const UserController = require('../controllers/UserController')

router.post('/registration',[
    check( 'username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 18 символов").isLength({min: 4, max:18})
], UserController.registration)
router.post('/login',UserController.login)
router.get('/auth', UserController.check)

module.exports = router