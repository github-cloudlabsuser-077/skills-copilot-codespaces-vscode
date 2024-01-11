// Create web server
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello world!");
});
server.listen(3000);
console.log("Server listening on port 3000");

// Path: .devcontainer/devcontainer.json
// Add the following to the `postCreateCommand` property
"postCreateCommand": "npm install",

// Path: .devcontainer/Dockerfile
// Add the following to the `RUN` section
RUN npm install -g nodemon

// Path: .devcontainer/docker-compose.yml
// Add the following to the `services` section
services:
  app:
    command: nodemon --inspect=





