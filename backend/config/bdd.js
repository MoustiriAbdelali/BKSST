const sequelize =require("sequelize")

const config= {
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_STS"
}
 module.exports =new  sequelize(
    config.database,
    config.username,
    config.password,
    {
  host: config.host,
  dialect: 'mysql'
    }
 ) 

