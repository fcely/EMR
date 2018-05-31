
// Dependencies
// =============================================================
var orm = require("../config/orm.js");
var db = require("../../models/");

// Routes
// =============================================================
module.exports = function(app) {

// Route to Create new patient
  app.post("/patients/new", function(req, res) {
    db.Patients.create(req.body).then(function(result) {
    //res.redirect("/patients");
    result = orm.selectAllPatients(function(result) {
      var data = result;
      res.render("patients", { visit:data });  
    });  
  
  
  });
 
    })


// Route to Create new patient
app.post("/patients/patients/new", function(req, res) {
  db.Patients.create(req.body).then(function(result) {
  //res.redirect("/patients");
  result = orm.selectAllPatients(function(result) {
    var data = result;
    res.render("patients", { visit:data });  
  });  


});

  })







// Route to Create new user
app.post("/doctors/new", function(req, res) {
  db.Doctors.create(req.body).then(function(result) {
  res.redirect("/doctors");
  });

  })

// Update the patients database
    app.post("/patients/update", function(req, res) {
    db.Patients.update(
      req.body,
      {returning: true, where: {Patient_Id: req.body.Patient_Id}}
    )
    .then(function(result) {
      res.redirect("/patients");
    })
   })

// Route to call specific patient information to be updated   
    app.get("/patients/update/:Patient_Id", function(req, res) {
      var Patient_Id = req.params.Patient_Id;
      db.Patients.findAll({where: {Patient_Id: Patient_Id}}).then(function(result){
        //res.json(result)
        res.render("updatepatient", {patient:result[0]});
      })  
    })

    app.get("/patients/patients/update/:Patient_Id", function(req, res) {
      var Patient_Id = req.params.Patient_Id;
      db.Patients.findAll({where: {Patient_Id: Patient_Id}}).then(function(result){
        //res.json(result)
        res.render("updatepatient", {patient:result[0]});
      })  
    })



 //Route to new user Form
 app.get("/doctors", function(req, res) {
  res.render("newdoctor", {  });  
})



  //Route to new Patient Form
  app.get("/patients/new", function(req, res) {
    res.render("newpatient", {  });  
  })

//Route to display all patients
  app.get("/patients", function(req, res) {
    //res.json({a:1})
    result = orm.selectAllPatients(function(result) {
      var data = result;
       //res.json(result)
      res.render("patients", { visit:data });  
    });
  });
    
// Home Page
  app.get("/", function(req, res) {
    res.render("dashboard", { })
  });


// Route to display all visits
app.get("/visits", function(req, res) {
  result = orm.selectAllVisits(function(result) {
    var data = result;
    console.log(data);
  //res.json({ visit:data })     
  res.render("visits", { visit:data });  
});
});



//Route to capture visits Detail Information, Pending to create similar route when log in happens from main page
app.get("/visits/log/:Visit_Id", function(req, res) {
  var Visit_Id = req.params.Visit_Id;
  result = orm.selectAllVisitsForPacientIdOnVisitId(Visit_Id,function(result) {
    var data = result;
  result2 = orm.selectAllVisitsForVisitId (Visit_Id,function(result2) {
  //res.json({ visit:data })     
  //res.json({ visit:data, current:result2 })
  res.render("visitlog", { visit:data, current:result2 });  

    })
});
});



app.get("/api/visit/:Visit_Id", function(req, res) {
  var Visit_Id = req.params.Visit_Id;
  result = orm.selectAllVisitsForPacientIdOnVisitId(Visit_Id,function(result) {
    res.json({ visit_data:result })  
  
});})









//Route to capture visits Detail Information from new appointment page
app.get("/visits/new/visits/log/:Visit_Id", function(req, res) {
  var Visit_Id = req.params.Visit_Id;
  result = orm.selectAllVisitsForPacientIdOnVisitId(Visit_Id,function(result) {
    var data = result;
  result2 = orm.selectAllVisitsForVisitId (Visit_Id,function(result2) {
  //res.json({ visit:data })     
  //res.json({ visit:data, current:result2 })
  res.render("visitlog", { visit:data, current:result2 });  

    })
});
});


// Update the  visits  database
app.post("/visits/log/update", function(req, res) {
  db.Visits.update(
    req.body,
    {returning: true, where: {Visit_Id: req.body.Visit_Id}}
  )
  .then(function(result) {
    res.redirect("/visits");
  })
 })


app.get("/visits/new/:Patient_Id", function(req, res) {
  var Patient_Id = req.params.Patient_Id;
  db.Patients.findAll({where: {Patient_Id: Patient_Id}}).then(function(result1){
    db.Doctors.findAll().then(function(result2){
      orm.selectAllVisitsForPatientId(Patient_Id,function(result3) {
    //res.json(result3)
      res.render("newvisit", {patient:result1[0], doctor:result2, visit:result3})
    })
    })
  })  
})

app.get("/patients/visits/new/:Patient_Id", function(req, res) {
  var Patient_Id = req.params.Patient_Id;
  db.Patients.findAll({where: {Patient_Id: Patient_Id}}).then(function(result1){
    db.Doctors.findAll().then(function(result2){
      orm.selectAllVisitsForPatientId(Patient_Id,function(result3) {
    //res.json(result3)
      res.render("newvisit", {patient:result1[0], doctor:result2, visit:result3})
    })
    })
  })  
})




// Route to Create new visit
app.post("/visits/new", function(req, res) {
  db.Visits.create(req.body).then(function(result) {
  res.redirect("/patients");
  });

  })


app.get("/visits/delete/:Visit_Id", function(req, res) {
  var Visit_Id = req.params.Visit_Id;
  db.Visits.destroy({where: {Visit_Id: Visit_Id}}).then(function(result) {
  res.redirect("/visits")
  });

  })

  
// Route to delete appointment from patient view
  app.get("/visits/new/visits/delete/:Visit_Id/:Patient_Id", function(req, res) {
    var Visit_Id = req.params.Visit_Id;
    var Patient_Id = req.params.Patient_Id;
    db.Visits.destroy({where: {Visit_Id: Visit_Id}}).then(function(result) {
    //location.reload()
      res.redirect("/visits/new/" + Patient_Id)
    });
  
    })

};
