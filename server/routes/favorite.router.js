const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/:category", (req, res) => {
  
  // Set the default `sqlQuery` to search by category
  let sqlQuery = `
    SELECT * FROM favorites
    JOIN category ON favorites.category_id = category.id
    WHERE category.name = $1;
  `;
  // Set the `sqlParams` to contain the search parameter
  let sqlParams = [req.params.category];

  // If favorites is `all`, reset the sqlQuery and sqlParams
  if (req.params.category === 'all') {
    // Set the `sqlQuery` to show everything
    sqlQuery = `
      SELECT * FROM favorites;
    `;
    // Have an empty `sqlParams`
    sqlParams = []
  }



  
  pool
    .query(sqlQuery, sqlParams)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("error in GET FAVORITE", err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
