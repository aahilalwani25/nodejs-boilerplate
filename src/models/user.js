const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/pg-config");
const { encryptPassword } = require("../utils/encrypt-password");

const User = sequelize.define("user", {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_role: {
    type: DataTypes.ENUM("customer", "admin"),
    allowNull: false,
    defaultValue: "customer",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,

  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  defaultScope: {
    attributes: { exclude: ['password'] }
  }
});

User.addHook('beforeCreate', (user, options) => {
  if (user.password) {
    user.password = encryptPassword(user.password);
  }
})

module.exports = User;
