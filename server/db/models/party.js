const Sequelize = require('sequelize')
const db = require('../db')

const Party = db.define('party', {
  accessCode: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  // scheduledDate: {
  //   type: Sequelize.DATE,
  // },
  startTime: { // how to get time & date from now to later???
    type: Sequelize.DATE,
  },
  endTime: {
    type: Sequelize.DATE,
  },
})

module.exports = Party
