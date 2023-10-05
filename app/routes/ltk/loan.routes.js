module.exports = app => {
  const loans = require("../../controllers/loan.controller");

  var router = require("express").Router();

  // Create a new Loan
  router.post("/", loans.create);
 
  // Retrieve all Tutorials
  router.get("/", loans.findAll);
 
  /*
  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  */
  
  // Retrieve a single Tutorial with id
  router.get("/:id", loans.findOne);
  /*
  
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  */
  
  //Update a Tutorial with id
  router.patch("/:id", loans.update);

  // Delete a Loan with id
  router.delete("/:id", loans.delete);

  app.use('/api/loans', router);
};
