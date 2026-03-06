module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    roomNumber: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    description: DataTypes.TEXT
  })
  return Room
}
