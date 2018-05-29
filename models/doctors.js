// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var doctors = sequelize.define("doctors", 
  {
    
    Doctor_Id: { type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Doctor_Name: DataTypes.STRING,
    Doctor_Specialty: DataTypes.STRING 
  
 
  })
  return doctors;
};
