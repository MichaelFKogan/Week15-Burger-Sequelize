'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgersequelizedb = sequelize.define('burgersequelizedb', {
    burgerName: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgersequelizedb;
};