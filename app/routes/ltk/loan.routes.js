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
 
  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);
 
  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/api/loans', router);
};
