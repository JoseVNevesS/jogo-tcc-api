require('dotenv').config()

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const server = express();
server.use(cors());
server.use(bodyParser.json({ limit: '20mb' }));


server.use("/api", routes);

server.listen(9000, () => {
  console.log(`Servidor rodando em: http://localhost:${9000}`);
});