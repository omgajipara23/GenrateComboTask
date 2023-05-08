'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SelectMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SelectMaster.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SelectMaster',
  });

  SelectMaster.associate = function (models) {
    SelectMaster.hasMany(models.OptionMaster, { foreignKey: 'selectId' })
  }
  return SelectMaster;
};