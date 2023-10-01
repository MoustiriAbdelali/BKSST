const sequelize = require("sequelize");
const Mesur =require('./Mesur')
module.exports = (sequelize, datatype) => {
  const mesur = sequelize.define("mesur", {
    date: {
      type: datatype.STRING(19),
    },
    Level: {
      type: datatype.TINYINT,
    },
    Level: {
      type: datatype.TINYINT,
    },
    AlarmeLevel: {
      type: datatype.BOOLEAN,
    },
    AlarmeBattery: {
      type: datatype.BOOLEAN,
    },
    Volt: {
      type: datatype.FLOAT,
    },
    Rsrp: {
      type: datatype.FLOAT(9),
    },
  },
  {
    tableName: 'Mesur'
  }
  )
  return mesur
}
