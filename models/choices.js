module.exports = function(sequelize, DataTypes) {
  var choices = sequelize.define("choices", {
    choice: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return choices;
};
