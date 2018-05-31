// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var Visits = sequelize.define("Visits", 
  {
  Visit_Id: { type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  Visit_Date: DataTypes.DATE, 
  Visit_Time: DataTypes.TIME, 
  Doctor_Id: DataTypes.INTEGER,
  Patient_Id: DataTypes.INTEGER,
  Blood_Pressure_S: DataTypes.FLOAT,
  Blood_Pressure_D: DataTypes.FLOAT,
  Weight: DataTypes.FLOAT,
  Temperature: DataTypes.FLOAT,
  History: DataTypes.STRING,
  Prescription: DataTypes.STRING,
  Diagnose: DataTypes.STRING
  }
  )
  return Visits;
}
