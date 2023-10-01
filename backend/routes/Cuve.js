const express =require('express')
const router =express.Router()
const model =require('../models')
const  cuve = model.Cuvet
const Sequelize =require("sequelize")
//console.log(cuve)
router
.route('/Cuves2')
.get((req,res) => {

    // cuve.findAll({
    //     attributes: [Sequelize.fn('max', Sequelize.col('cuve_id'))],
    //     group: ["cuve_id"],
    //    raw: true,
    // }
     cuve.findAll({
      
      include: {
        model: model.Mesur,
        attributes : [Sequelize.fn('max', Sequelize.col('id')),],
       required: true
       
    },
   // attributes: [Sequelize.fn('max', Sequelize.col('id')), "qte","type_carburant"],
    //  group: ["cuve_id "],
    // raw: true,
    // required :true,
  }
    ).then(Cuves=>{
            res.json(Cuves)
        })

    .catch((err)=>res.status(400).send(err))
  })



// .get((req,res) => {

//    cuve.findAll().then(Cuves=>{
//     res.json(Cuves)
// }).then(Cuves=>{
//             res.json(Cuves)
//         })

//     .catch((err)=>res.status(400).send(err))
//   })
  

  module.exports=router