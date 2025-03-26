'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  scores.init({
    number: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    math: {
      type: DataTypes.FLOAT
    },
    literature: {
      type: DataTypes.FLOAT
    },
    foreignLanguage: {
      type: DataTypes.FLOAT
    },
    physics: {
      type: DataTypes.FLOAT
    },
    chemistry: {
      type: DataTypes.FLOAT
    },
    biology: {
      type: DataTypes.FLOAT
    },
    history: {
      type: DataTypes.FLOAT
    },
    geography: {
      type: DataTypes.FLOAT
    },
    civicEducation: {
      type: DataTypes.FLOAT
    },
    foreignLanguageId: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'scores',
    timestamps: false
  });
  return scores;
};