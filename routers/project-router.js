const router = require("express").Router();

const Projects = require("./project-model.js");

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
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
      const inserted = await Projects.add(project);
      res.status(201).json(inserted);
    } catch (error) {
      res.status(500).json({ message: "cannot add" });
    }
  } else {
    res.status(400).json({ message: "please provide a name" });
  }
});

module.exports = router;
