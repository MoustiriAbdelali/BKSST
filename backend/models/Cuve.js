const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const Cuve = sequelize.define("Cuve", {
    cuve_id: {
      type: datatype.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_carburant: {
      type: datatype.STRING(7),
    },
    volume_cuve: {
      type: datatype.MEDIUMINT(9),
    },
    prix_achats: {
      type: datatype.DECIMAL(4, 2),
    },
    prix_vente: {
      type: datatype.DECIMAL(4, 2),
    },
    Statut: {
      type: datatype.BOOLEAN,
    },
    IDStation: {
      type: datatype.INTEGER(11),
    },
  },
  {
    tableName: 'Cuve'
  }
  )
  return Cuve
};
