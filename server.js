const express = require("express");
const projectRouter = require("./routers/project-router.js");

const server = express();
server.use(express.json());
server.use("/api/project", projectRouter);

module.exports = server;
