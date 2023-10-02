


//function exMdl(){
const sequelize=require('sequelize')
const db =require('../config/databaseClient')
const CuveModel =require('./Cuve')
const MesurModel =require('./Mesur')
const  Cuvet =CuveModel(db,sequelize)
const  Mesur =MesurModel(db,sequelize)
    db.sync({force : false}).then(()=>{
    console.log()
})
Cuvet.hasMany(Mesur,{
    onDelete:"CASCADE"
  })


    Cuvet.hasMany(Mesur, { foreignKey: 'CuveCuveId' });
    Mesur.belongsTo(Cuvet, { foreignKey: 'CuveCuveId' });
  
  
 
  
module.exports={
    Cuvet,
    Mesur
}
//}

//module.exports = { exMdl };

