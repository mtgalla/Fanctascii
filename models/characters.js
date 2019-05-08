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
  characters.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    characters.belongsTo(models.choices, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return characters;
};
