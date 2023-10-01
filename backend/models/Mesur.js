const sequelize = require("sequelize");
const Mesur =require('./Mesur')
module.exports = (sequelize, datatype) => {
  const mesur = sequelize.define("mesur", {
    date: {
      type: datatype.STRING(19),
    },
    qte: {
      type: datatype.MEDIUMINT(9),
    },
  },
  {
    tableName: 'Mesur'
  }
  )
  return mesur
}
