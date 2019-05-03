const server = require("./server.js");

const port = 9999;
server.listen(port, () => {
  console.log(`********** server listening to port ${port} **********`);
});
