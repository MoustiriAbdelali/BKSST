const express =require('express')
const router =express.Router()
const model =require('../models')
const  Cuve = model.Cuvet
const sequelize =require("sequelize")
const Mesur = model.Mesur

router.post('/Cuves', async (req, res) => {
  try {
    const results = await Cuve.findAll({
      attributes: [
        'cuve_id',
        'libelle',
        'type_carburant',
        'volume_cuve',
        [sequelize.literal('100/volume_cuve'), 'Pourcentage'],
      ],
      include: [
        {
          model: Mesur,
          attributes: ['level', 'id', 'Qte','AlarmeBattery','Volt','Rsrp',
          //[Sequelize.col('(Mesur.Qte * 100) '),"pour"]
        ],
          order: [['id', 'DESC']],
          limit: 1,
          required: false,
        
        },
      ],
   
      where: {
        IDStation: req.body.IDStation,
      },
     // raw: true,
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// .get((req,res) => {

//    cuve.findAll().then(Cuves=>{
//     res.json(Cuves)
// }).then(Cuves=>{
//             res.json(Cuves)
//         })

//     .catch((err)=>res.status(400).send(err))
//   })
  

  module.exports=router