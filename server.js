const express = require("express");
const projectRouter = require("./routers/project-router.js");
const actionRouter = require("./routers/action-router.js");

const server = express();
server.use(express.json());
server.use("/api/project", projectRouter);
server.use("/api/action", actionRouter);

module.exports = server;
