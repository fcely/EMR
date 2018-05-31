// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var Patients = sequelize.define("Patients", 
  {
  Patient_Id: { type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  Patient_First_Name: DataTypes.STRING,
  Patient_Last_Name: DataTypes.STRING, 
  Patient_Email: DataTypes.STRING, 
  Phone: DataTypes.STRING,
  DOB: DataTypes.DATEONLY, 
  Address: DataTypes.STRING,
  City: DataTypes.STRING,
  State: DataTypes.STRING,
  Zip: DataTypes.INTEGER,
  SSN: DataTypes.INTEGER,
  Gender: DataTypes.STRING,
  Notes: DataTypes.STRING,

  Allergies: DataTypes.STRING,
  Alcohol_Use: DataTypes.STRING,
  Tabaco_Use: DataTypes.STRING,
  Mother_History: DataTypes.STRING,
  Father_History: DataTypes.STRING,
  Height: DataTypes.FLOAT
  })
  return Patients;
}
