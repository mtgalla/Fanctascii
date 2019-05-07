module.exports = function(sequelize, DataTypes) {
  var characters = sequelize.define("characters", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    choice_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return characters;
};
