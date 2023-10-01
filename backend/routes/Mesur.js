

const express =require('express')
const router =express.Router()
const model =require('../models')
const Mesur = model.Mesur
const Sequelize =require("sequelize")


router
.route('/Cuves')
.get((req,res) => {

    Mesur.findAll({
        attributes: [Sequelize.fn('max', Sequelize.col('id')), "qte","type_carburant"],
        group: ["CuveCuveId"],
       raw: true,
    }
    ).then(Cuves=>{
            res.json(Cuves)
        })

    .catch((err)=>res.status(400).send(err))
  })

  module.exports=router