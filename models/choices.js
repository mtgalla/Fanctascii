module.exports = function(sequelize, DataTypes) {
  var choices = sequelize.define("choices", {
    choice: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  console.log(choices.choice);
  return choices;
};
