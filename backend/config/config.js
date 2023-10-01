require('dotenv').config();
module.exports={
    developement :{
        host:     process.env.DB_HOST ,
        database: process.env.DB_DATABASE ,
        username: process.env.DB_USERNAME ,
        password: process.env.DB_PASSWORD ,
        dialect:  process.env.DIALECT    
    },
    production :{
        host:     process.env.DB_HOST ,
        database: process.env.DG_DATABASE ,
        username: process.env.DG_USERNAME ,
        password: process.env.DG_PASSWORD ,
        dialect:  process.env.DIALECT ,
        logging:  false
    }
}
global.valeur_ = {
    host:     "" ,
    database:"" ,
    username:"" ,
    password: "" ,
  }
