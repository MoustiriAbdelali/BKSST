

const express =require('express')
const router =express.Router()
const model =require('../models')
const Mesur = model.Mesur
const Cuve = model.Cuvet
const sequelize =require("sequelize")


router.route('/Cuves').get(async (req, res) => {
    try {
      // Outer query to find the maximum 'id' value from Mesur
      const maxId = await Mesur.max('id');
  
      // Inner query to retrieve additional information based on the maximum 'id'

      //clearconsole.log(maxId)
      const result = await Mesur.findOne({
        where: {
          id: maxId,
        },
        include: [
          {
            model: Cuve,
            attributes: ['type_carburant'],
            where: {
              cuve_id: 1,
            },
          },
        ],
        raw: true,
      });
  
      res.json(result); // Send the result as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// router
// .route('/Cuves')
// .get((req,res) => {

//      Mesur.findAll({
//         attributes: [
           
//             [sequelize.fn('max', sequelize.col('id')), 'Maxid'],
//             //[sequelize.col('Cuve.type_carburant'), 'type_carburant'],
//           ],
//           include: [
//             {
//               model: Cuve,
//            //   attributes: [],
//               where: {
//                 cuve_id: 1, // Adjust the condition as needed
//               },
//             },
       
//           ],
//            //group: ['Cuve.cuve_id'],
//            raw: true,
       
//     }
//     ).then(Mesur_=>{
//             //res.json(Mesur_.max('id'))
//             res.json(Mesur_)
//         })

//     .catch((err)=>res.status(400).send(err))
//   })

 
// router
// .route('/Cuves')
// .get((req,res) => {

//     Mesur.findAll({
//         attributes: [Sequelize.fn('max', Sequelize.col('id')), "qte","type_carburant"],
//         group: ["CuveCuveId"],
//        raw: true,
//     }
//     ).then(Cuves=>{
//             res.json(Cuves)
//         })

//     .catch((err)=>res.status(400).send(err))
//   })




router
.route('/Mesur')
.post((req,res) => {
    Mesur.findAll({
        where: {
            CuveCuveId : req.body.IDCuve
        }})
        .then(Cuves=>{
            res.json(Cuves)
        })

    .catch((err)=>res.status(400).send(err))
  })
     


  module.exports=router