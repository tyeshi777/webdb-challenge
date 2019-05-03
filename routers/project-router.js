const router = require("express").Router();

const Project = require("./project-model.js");

router.get("/", (req, res) => {
  Project.find()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the projects" });
    });
});

router.post("/", async (req, res) => {
  const project = req.body;

  if (project) {
    try {
      const inserted = await Project.add(project);
      res.status(201).json(inserted);
    } catch (error) {
      res.status(500).json({ message: "cannot add" });
    }
  } else {
    res.status(400).json({ message: "please provide a name" });
  }
});

module.exports = router;
