const { connection } = require("../database/connection")
const { DataTypes} = require("sequelize")

const PermissionRole = connection.define("permissionsRole",{

})

module.exports = PermissionRole