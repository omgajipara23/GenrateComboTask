'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OptionMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OptionMaster.init({
    selectId: DataTypes.INTEGER,
    optionname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OptionMaster',
  });

  OptionMaster.associate = function (models) {
    OptionMaster.belongsTo(models.SelectMaster, { foreignKey: 'selectId' })
  }
  
  return OptionMaster;
};