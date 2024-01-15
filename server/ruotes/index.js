const Router = require('express')
const router = new Router()
const UserRouter = require('./UserRouter')
const RolesRouter = require('./RoleRouter')
const ArticleRouter = require('./ArticleRouter')

router.use('/user', UserRouter)
router.use('/role', RolesRouter)
router.use('/role', ArticleRouter)

module.exports = router