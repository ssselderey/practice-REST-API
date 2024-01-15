const  sequelize = require('../db')
const {DataTypes, INTEGER} = require('sequelize')


//база данных

const User = sequelize.define('user',{
    username: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING,unique: true },
    password:{type: DataTypes.STRING},
})
const Roles = sequelize.define('Roles', {
    Default_User:{type: DataTypes.STRING, unique: true, default: "USER"},
    Admin: {type: DataTypes.STRING, unique: true, default: "Admin"},
    Moderator: {type: DataTypes.STRING, unique: true, default: "Moderator"},
    Writer: {type: DataTypes.STRING, unique: true, default: "Writer"},
})
const User_Roles = sequelize.define('User-Roles', {
    id: {type: DataTypes.INTEGER, unique:true, allowNull: false, primaryKey: true},
    role_id: {type: DataTypes.INTEGER},
    userid:{type: DataTypes.INTEGER},
})


const Article = sequelize.define('Article', {
    id: {type: DataTypes.INTEGER, unique:true, allowNull: false, primaryKey: true},
    name: {type: DataTypes.STRING},
    condition:{type: DataTypes.STRING},
})

const User_Article = sequelize.define('User_Article', {
    id: {type: DataTypes.INTEGER, unique:true, allowNull: false, primaryKey: true},
    article_id: {type:DataTypes.INTEGER},
    user_id:{type: DataTypes.INTEGER},
})

User.belongsToMany(Roles,{through: User_Roles})//связь многим ко многим с связующей таблицей
User.belongsToMany(Article, {through: User_Article})
module.exports = {
    User, Roles, User_Roles, Article, User_Article
}
