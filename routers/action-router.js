const router = require("express").Router();

const Action = require("./action-model.js");

router.get("/", (req, res) => {
  Action.find()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the Actions" });
    });
});

router.post("/", async (req, res) => {
  const action = req.body;

  if (action) {
    try {
      const inserted = await Action.add(action);
      res.status(201).json(inserted);
    } catch (error) {
      res.status(500).json({ message: "cannot add" });
    }
  } else {
    res.status(400).json({ message: "please provide a name" });
  }
});

module.exports = router;
